function preload()
{

}
function setup()
{
    Canvas = createCanvas(500,400);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(500,400);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose",gotResults);
}
function draw()
{
    image(video, 0,0,500,400);
}
function snapshot()
{
    save("photo.png");
}
function modelLoaded()
{
    console.log("Model is loaded successfully.");
}
function gotResults(result)
{
    if(result.length > 0){
    x = result[0].pose.nose.x;
    y = result[0].pose.nose.y;
    console.log("nose x = " + x + ".");
    console.log("nose y = " + y + ".");
    }
}