//var img
var images 
var imgNumber
var onMode

function setup() 
{
  createCanvas(windowWidth, windowHeight); 
  onMode = true
  img1 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_02.jpg?1509032640166");
  img2 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_01.jpg?1509032640233");
  img3 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_06.jpg?1509032640241");
  img4 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_07.jpg?1509032640350");
  img5 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_11.jpg?1509032640373");
  img6 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_03.jpg?1509032640397");
  img7 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_05.jpg?1509032640474");
  img8 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_08.jpg?1509032640489");
  img9 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_13.jpg?1509032640600");
  img10 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_16.jpg?1509032640621");
  img11 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_15.jpg?1509032640650");
  img12 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_17.jpg?1509032640858");
  img13 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_10.jpg?1509032641180");
  img14 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_18.jpg?1509032641315");
  img15 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_12.jpg?1509032641438");
  img16 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_04.jpg?1509032641513");
  img17 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_09.jpg?1509032641713");
  img18 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_20.jpg?1509032641749");
  img19 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_19.jpg?1509032642073");
  img20 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2Fdough_14.jpg?1509032642428");
  images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];
  imgNumber = random([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
  
  button = createButton('');
  button.position(width/2-50,100);
  button.mousePressed(nextImage);
  background('#fddc4d');
  //button = createButton('KEEP IMAGE');
  //button.position (width/2-50,height/3);
  //button.mousePressed(stahp);
  
}
function deviceShaken() {
  onMode = false;
  button.hide();
}

function nextImage(){
  if (imgNumber == 19){
    imgNumber=0
  }
  else {
  imgNumber++;
  }
  onMode = true;
  background(244, 200, 66);
}

function mouseDragged(){
  copy(images[imgNumber], mouseX, mouseY, 200, 200, mouseX, mouseY, 200, 200);
}

function draw() 
{
  console.log(imgNumber);
  

if (onMode == true){
  frameRate(2);
  var x = int(random(width));
  var y = int(random(height));
  fill('#fbf8f1');
  noStroke()
  ellipse(x, y, 100, 100);
  
  var x = int(random(width));
  var y = int(random(height));
  fill('#c36f05');
  noStroke()
  ellipse(x, y, 200, 200);
  
  var x = int(random(width));
  var y = int(random(height));
  fill('#311102');
  noStroke()
  ellipse(x, y, 400, 400);
}

}


function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}

