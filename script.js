// let speech = new SpeechSynthesisUtterance();

// let voices =[];

// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged =() => {
// voices = window.speechSynthesis.getVoices();
// speech.voice = voices[0];

// voices.forEach((voice, i) => (voiceSelect.options[i] = new option(voice.name, i)));
// };

// voiceSelect.addEventListener("change",() => {
//     speech.voice = voices[voiceSelect.value];
// });


// document.querySelector("button").addEventListener("click",()=>{
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });

// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea');
    const voiceSelect = document.querySelector('select');
    const playButton = document.querySelector('button');

    // Initialize SpeechSynthesis API
    const synth = window.speechSynthesis;
    let voices = [];

    // Function to populate voices in the select dropdown
    function populateVoiceList() {
        voices = synth.getVoices();
        voiceSelect.innerHTML = '';

        voices.forEach((voice, index) => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = index;
            voiceSelect.appendChild(option);
        });
    }

    // Populate voices when they are loaded
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    // Function to speak the text
    function speakText() {
        const text = textarea.value;
        if (text.trim() !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            const selectedVoice = voices[voiceSelect.value];
            utterance.voice = selectedVoice;
            synth.speak(utterance);
        }
    }

    // Event listener for play button
    playButton.addEventListener('click', () => {
        speakText();
    });
    
});



    