import os
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from murf import Murf

load_dotenv()

API_KEY = os.getenv("MURF_API_KEY")

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve the HTML UI
@app.get("/", response_class=HTMLResponse)
async def read_index():
    with open("Templates\index.html", "r", encoding="utf-8") as f:
        return HTMLResponse(content=f.read())

# Text to Speech using Murf SDK
@app.post("/tts")
async def text_to_speech(request: Request):
    data = await request.json()
    text = data.get("text")

    if not text:
        return JSONResponse({"error": "No text provided"}, status_code=400)

    if not API_KEY:
        return JSONResponse({"error": "Missing Murf API key"}, status_code=500)

    try:
        client = Murf(api_key=API_KEY)

        res = client.text_to_speech.generate(
            text=text,
            voice_id="en-US-julia",  # You can change this to any valid voice
            format="MP3",            # Options: WAV, MP3, FLAC, ALAW, ULAW
            channel_type="STEREO",   # or "MONO"
            sample_rate=44100        # 8000, 24000, 44100, 48000
        )

        audio_url = res.audio_file
        if audio_url:
            return JSONResponse({"audio_url": audio_url})
        else:
            return JSONResponse({"error": "No audio file returned"}, status_code=500)

    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)
