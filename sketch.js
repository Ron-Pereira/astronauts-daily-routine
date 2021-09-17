var iss, issImage, sleep, brush, gym, eat, bath, move, drink;
var astronaut;

function preload() {
  issImage = loadImage("Images/iss.png");
  sleep = loadAnimation("Images/sleep.png");
  brush = loadAnimation("Images/brush.png"); 
  gym = loadAnimation("Images/gym1.png", "Images/gym11.png", "Images/gym2.png", "Images/gym12.png"); 
  eat = loadAnimation("Images/eat1.png", "Images/eat1.png", "Images/eat1.png", "Images/eat2.png", "Images/eat2.png", "Images/eat2.png"); 
  bath = loadAnimation("Images/bath1.png", "Images/bath1.png", "Images/bath1.png", "Images/bath2.png", "Images/bath2.png", "Images/bath2.png");
  move = loadAnimation("Images/move.png", "Images/move1.png");
  drink = loadAnimation("Images/drink1.png","Images/drink2.png")
}

function setup() {
  createCanvas(800, 400);
  astronaut=createSprite(400,200,10,10);
  astronaut.addAnimation("sleep",sleep);
  astronaut.scale=0.1
  
  

 }

function draw() {
 background(issImage) 
 drawSprites();
 edges=createEdgeSprites();

  textSize(30);
   fill("light blue") 
   text("Instructions:", 20, 30); 
   text("b = Brushing", 20, 60); 
   text("right arrow = Gymming", 20, 90); 
   text("left arrow = Eating", 20, 120); 
   text("up arrow = Bathing", 20, 150); 
   text("down  = Moving", 20, 180);
   text("d  = drinking", 20, 210);

   if(keyDown("b")) {
    astronaut.addAnimation("brush",brush)
    astronaut.changeAnimation("brush",brush);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("gym", gym)
    astronaut.changeAnimation("gym",gym);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eat",eat)
    astronaut.changeAnimation("eat",eat);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bath",bath)
    astronaut.changeAnimation("bath",bath);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
   }
   if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("move",move)
    astronaut.changeAnimation("move",move);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  if(keyDown("d")) {
    astronaut.addAnimation("drink",drink)
    astronaut.changeAnimation("drink",drink);
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  
}