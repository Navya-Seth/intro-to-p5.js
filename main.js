function preload(){

}

function setup(){
   canvas = createCanvas(640,480);
   canvas.position(110,250);
   video = createCapture(VIDEO);
   video.hide();
    tint_color = " ";

}

function draw() {
    circle(30, 30, 30);
    rect(30, 20, 55, 55, 20);
    ellipse(56, 46, 55, 55);
    }