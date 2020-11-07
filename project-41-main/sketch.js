const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, umbrella;
var rand;
var thunder1,thunder2,thunder3,thunder4,thunder;
var boyImg;
var drop = [];

function preload(){
    boyImg = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png");
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
    
}

function setup(){
    engine = Engine.create(); 
    world = engine.world;
    createCanvas(400,700);

    boy = createSprite(200,560,20,20);
    boy.addAnimation("walking",boyImg);
    boy.scale = 0.40;

    umbrella = new Umbrella(200,485);
    
}

function draw(){
    background(25);  
    Engine.update(engine);
    
    if(frameCount % 10 === 0){
        drop.push(new Drop(random(width/2-10,width/2+10),10,10));
    }

    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0 && frameCount >= 1){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(30,370),random(10,30),10,10);
        switch (rand) {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
        
            default:break;
        }
        thunder.scale = random(0.3,0.6);
        thunder.lifetime = 30;
    }

    if(frameCount % 1 === 0){
        drop.push(new Drop(random(0,400),0,20,20));
      }

    drawSprites();
    //umbrella.display();

}   

