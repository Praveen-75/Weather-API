function getVoices() {
     let voices = speechSynthesis.getVoices();
     if (!voices.length) {
          let utterance = new SpeechSynthesisUtterance("");
          speechSynthesis.speak(utterance);
          voices = speechSynthesis.getVoices();
     }
     return voices;
}

function speak(text, voice, rate, pitch, volume) {
     let speakData = new SpeechSynthesisUtterance();
     speakData.volume = volume;
     speakData.rate = rate;
     speakData.pitch = pitch;
     speakData.text = text;
     // speakData.lang = 'en-IN';
     speakData.lang = 'en-GB';
     speakData.voice = voice;
     speechSynthesis.speak(speakData);

}

var a = document.querySelector("#temp").textContent;
var b = document.querySelector("#plc").textContent;


if ('speechSynthesis' in window) {
     let voices = getVoices();
     let rate = 1, pitch = 2, volume = 1;
     let text = b + "Today Temperature" + a + "celsius";

     speak(text, voices[5], rate, pitch = .5, volume);
     setTimeout(() => {
          rate = 0.5; pitch = 1.5, volume = 2;
          //   let text = b + "Today Temperature" + a + "centigrade";
          //   speak(text, voices[10], rate, pitch, volume );
     }, 2000);
} else {
     console.log(' Speech Synthesis Not Supported 😞');
}


