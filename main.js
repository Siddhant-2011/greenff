lwx=0;
lwy=0;
rwx=0;
rwy=0;
var rubachiek=loadSound('music.mp3');
var pirate=loadSound('music2.mp3');   

function preload() {

}

function setup(){
    canvas=createCanvas(450,300);
    canvas.center();
    video=createCapture(VIDEO);
video.hide();
posenet = ml5.posenet('video',modelLoaded);
posenet.on('pose',gotPoses);
}

function  draw(){
    image(video,0,0,450,300)
}



function modelLoaded(){
    console.log('jgfdahfjlfdgjalhgfljhagf');
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lwxx=results[0].pose.leftWrist.x;
        lwy=results[0].pose.leftWrist.y;
        rwx=results[0].pose.rightWrist.x;
        rwy=results[0].pose.rightWrist.y;
        console.log('lx= '+lwx+'ly= '+lwy+'rx= '+rwx+'ry= '+rwy);    
    }
}