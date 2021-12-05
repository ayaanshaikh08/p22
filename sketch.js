var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyimage1.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairy = createSprite(100,600)
    fairy.addImage(fairyImg);
	fairy.scale = 0.2;
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

 
  //write code to stop star in the hand of fairy
if(star.y >= 550){
	star.velocityY= 0
	console.log("hello");
	Matter.Body.setStatic(starBody,true);

}

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
   if(keyCode===LEFT_ARROW){
	   fairy.x = fairy.x -5
   }
   if(keyCode===RIGHT_ARROW){
	fairy.x = fairy.x +5
}
	//writw code to move fairy left and right
	
}
