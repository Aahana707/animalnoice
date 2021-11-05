function startClassification(){
    navigator.mediaDevices.getUserMedia(
        {audio: true}
    );
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/e6M3EgPAm/model.json", modelReady);
}