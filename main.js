var status = " ";
var video_load = " "; 
var text = " "; 

function preload(){
    video_load = createVideo("video.mp4");
    video_load.hide();
}

function draw(){
    image(video_load, 0, 0, 500, 500);
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center(); 
} 

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded); 
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    text = document.getElementById("text").value;
}

function modelLoaded(){
    console.log("Model loaded!"); 
    status_load = "true"; 
} 