noseX = 0;
noseY = 0;

function preload(){
    clownnose = loadImage("https://i.postimg.cc/kgPF50xT/3255216-small-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose",gotPoses);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-75;
        noseY = results[0].pose.nose.y-75;
        console.log("nose x = " + noseX);
        console.log("nose y = "+ noseY);
    }
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video,0,0,400,400);
    image(clownnose,noseX,noseY,150,150);
}

function take_snapshot(){
    save("clownfilter.png");
}

