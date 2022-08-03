heat_waves = '';
memories = '';

function preload(){
    heat_waves = loadSound("HeatWaves.mp3");
 memories = loadSound("Memories.mp3");   
}
function setup(){
 canvas = createCanvas(500, 500);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
}
function draw(){
    image(video, 0, 0, 500, 500);
}