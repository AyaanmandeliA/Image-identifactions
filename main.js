Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera= document.getElementById("camera");
Webcam.attach("#camera");

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("cap").innerHTML="<img id='catury_image' src='"+data_uri+"'>";
    });
}

console.log("ml5 version" , ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mvzqDwMh-/model.json",modelloaded);

function modelloaded() {
    console.log("Model Loaded");
}

function chek() {
    img = document.getElementById("catury_image");
    classifier.classify(img, gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }

    else {
        console.log(results);
        document.getElementById("obj").innerHTML = results[0].label;
        document.getElementById("accu").innerHTML = results[0].confidence.toFixed(3);
    }
}
