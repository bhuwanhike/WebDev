let speech = new SpeechSynthesisUtterance();
let button = document.querySelector("button");
let textarea = document.querySelector("textarea");
let voiceSelect = document.querySelector("select");

let voices = [];

// Initialize voices when the page loads
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, index) => {
    voiceSelect.options[index] = new Option(voice.name, index);
  });
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Handle button click
button.addEventListener("click", () => {
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});
