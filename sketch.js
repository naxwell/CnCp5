var img

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  img = loadImage("assets/heart.jpg");
  stroke(255);
  noFill();
}

function draw() 
{
  //image(img,0,0,width,height); //displays full screen image

  if(mouseIsPressed){
    copy(img, mouseX, mouseY, 100, 100, mouseX, mouseY, 100, 100);
}

  
  var x = int(random(width));
  var y = int(random(height));
  fill(244, 200, 66);
  noStroke()
  ellipse(x, y, 100, 100);

}



function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}