
/* This was the random image puller I had on file from an old website that was used for reference
  var random_images_array = [
  "2cb70ef7-6218-4339-81cd-a524df4eae38%2Fclean.jpg?1508715562852", 
  "2cb70ef7-6218-4339-81cd-a524df4eae38%2Fclean3.jpg?1508715562982", 
  "2cb70ef7-6218-4339-81cd-a524df4eae38%2Fclean7.jpg?1508715563024", 
  "2cb70ef7-6218-4339-81cd-a524df4eae38%2Fclean8.jpg?1508715563223"
  ];

function getRandomImage(imgAr, path) {
    path = path || 'https://cdn.glitch.com/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    return path + imgAr[ num ];
    //var imgStr = '<img src="' + path + img + '" alt = "">';
    //document.write(imgStr); document.close();
}*/

//Photo stamp stuff
//var img
var images 
var imgNumber
var onMode

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  onMode = true
  img1 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2FDough_01.jpg?1509028698246");
  img2 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2FDough_03.jpg?1509028698507");
  img3 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2FDough_02.jpg?1509028698731");
  img4 = loadImage("https://cdn.glitch.com/2cb70ef7-6218-4339-81cd-a524df4eae38%2FDough_04.jpg?1509028698738");
  images = [img1, img2, img3, img4];
  imgNumber = random([0,1,2,3]);
  console.log(imgNumber)
  button = createButton('GIMME A NEW IMAGE');
  button.position(width/2-50,100);
  button.mousePressed(nextImage);
  background('#fddc4d');
  //button = createButton('KEEP IMAGE');
  //button.position (width/2-50,height/3);
  //button.mousePressed(stahp);
  
}
function deviceShaken() {
  onMode = false;
}

function nextImage(){
  if (imgNumber == 3){
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
  
  //image(images[2],0,0,width,height); //displays full screen image
  // original copy code
  //if(mouseIsPressed){ 
    //copy(images[imgNumber], mouseX, mouseY, 100, 100, mouseX, mouseY, 100, 100);
//}

if (onMode == true){
  frameRate(5);
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

