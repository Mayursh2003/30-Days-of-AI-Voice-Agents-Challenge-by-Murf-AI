document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const generateBtn = document.getElementById("generateBtn");
  const audioPlayer = document.getElementById("audioPlayer");

  generateBtn.addEventListener("click", async () => {
    const text = textInput.value.trim();
    if (!text) {
      alert("Please enter some text.");
      return;
    }

    try {
      const response = await fetch("/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (data.audio_url) {
        audioPlayer.src = data.audio_url;
        audioPlayer.play();
      } else {
        alert("Error: " + (data.error || "TTS failed."));
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  });
});
