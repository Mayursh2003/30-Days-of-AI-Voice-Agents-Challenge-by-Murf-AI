let isRecording = false;
const recordBtn = document.getElementById('recordBtn');
const agentMsg = document.getElementById('agentMsg');

const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'white',
  interact: false,
  cursorWidth: 0,
  height: 100,
  normalize: true,
  responsive: true,
  plugins: [
    WaveSurfer.microphone.create()
  ]
});

recordBtn.addEventListener('click', () => {
  if (!isRecording) {
    wavesurfer.microphone.start();
    agentMsg.style.display = 'block';
    recordBtn.textContent = "Stop Recording";
  } else {
    wavesurfer.microphone.stop();
    agentMsg.style.display = 'none';
    recordBtn.textContent = "Start Recording";
  }
  isRecording = !isRecording;
});

wavesurfer.microphone.on('deviceError', function(code) {
  console.warn('Device error: ' + code);
});
