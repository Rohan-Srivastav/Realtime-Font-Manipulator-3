user_name = localStorage.getItem("User_Name");

leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 440);
    video.position(100,110)
    canvas = createCanvas(550, 440);
    canvas.position(800,110);
  

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    fill('#F90093');
   textSize(difference);
   text(user_name, 100, 200);

    document.getElementById("side").innerHTML = "Width And Height Of The Text is = " + difference;
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{

    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + " difference = " + textSize);

    }
}
