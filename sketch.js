const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 
var engine, world,ob1; 
var box1,box2, box3,box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;

function setup() 
{ 
    createCanvas(1200,400); 

    engine = Engine.create(); 
    world = engine.world; 

    var ob1_options = { isStatic: true } 
    ob1=Bodies.rectangle (200,100,50,50,ob1_options);
    World.add(world,ob1);
    
    gr = new Ground (600,390,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,180,70,70)
    box4 = new Box(920,180,70,70);
    box5 = new Box(810,80,70,70);
    pig1 = new Pigs(810, 350);
    pig2 = new Pigs(810,180);
    log1 = new Logs(810,260,350,90);
    log2 = new Logs(810,120,350,90);
    log3 = new Logs(760,50,150,30);
    bird1 = new Birds(100,100);
} 

function draw() 
{ 
    background("black"); 
    Engine.update(engine); 
    rectMode(CENTER); 
    
    console.log(log1.body.angle);

    gr.display();
    box1.display();
    box2.display();
    
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    bird1.display();

    drawSprites(); 
}