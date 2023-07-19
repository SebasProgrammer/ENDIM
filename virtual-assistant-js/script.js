escuchar.addEventListener('click', function () {
    let audio = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition =  new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "es-PE"

    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        audio_texto.innerHTML = transcript
    })
    if (audio === true) recognition.start();
})