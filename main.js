var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}
function speak(){
    var synth = window.speechSynthesis;

    speakData = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        takeSelfie();
        save();
    }, 5000);
}


camera = document.getElementById("camera");
Webcam.set({
    width:360,
    heigth:250,
    image_format: 'png',
    png_quality:90
});