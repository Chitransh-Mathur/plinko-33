var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var particle;
 var divisions=[];
var particles = [];
var plinkos = [];
var divisionHeight=300;
var gameState="start";
var score =0;
var count=0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
 
  text("500  ",25,500);
  text("500  ",100,500);
  text("500  ",180,500);
  text("500  ",255,500);
  text("100  ",338,500);
  text("100  ",420,500);
  text("100  ",490,500);
  text("200  ",580,500);
  text("200  ",655,500);
  text("200  ",735,500);
  
  Engine.update(engine);
  ground.display();
  if (gameState==="end"){
    textSize(70);
    text("gameOver",200,250)
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if (particle!=null){
    particle.display();
    if (particle.body.position.y>760){
      if (particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(count>=5)gameState="end";
      }
   
 
   
    else  if (particle.body.position.x<600 && particle.body.position.x>301){
        score=score+100;
        particle=null;
        if(count>=5)gameState="end";
      }
   
    else  if (particle.body.position.x<900 && particle.body.position.x>601 ){
        score=score+200;
        particle=null;
        if(count>=5)gameState="end";
      }
    }
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}