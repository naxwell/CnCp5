var img

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  img = loadImage("assets/heart.jpg");

  background(img);
  stroke(255);
  noFill();
}

function draw() 
{
	
	//image(img, 0,0);
	//background(120);
	//if(mouseIsPressed){
	//	noFill();
	//	ellipse(mouseX,mouseY,200,200);
	//}	

   if(mouseIsPressed){
   	copy(img, mouseX, mouseY, 100, 100, mouseX, mouseY, 100, 100);
}

  //var pointillize = map(random, 0, width, 2, 18);
  var x = int(random(width));
  var y = int(random(height));
  fill(255);
  noStroke()
  ellipse(x, y, 100, 100);

}



function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}