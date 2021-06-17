function preload(){

}

function setup(){
canvas=createCanvas(600,500);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

tint_color="";
}
function change_color(){
    tint_color=document.getElementById("filter_color").value;
}
function draw(){
    image(video,0,0,600,500);
    tint(tint_color);

}
function take_snapshot(){
    save("ilikeaarav.png");
}