// Add matter.js first
// give the physics engines
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
// create the array of ranindrops
var raindrops = [];
// make  a new umbrella 


function setup(){
  // create canvas
var canvas = createCanvas(displayWidth - 20,displayHeight - 30);
  // crate engine + world
    engine = Engine.create();
    world = engine.world;
  // make sprites of thunderImages 1 , 2 , 3 
  //  give positions to the sprites

}

function draw(){
  // add image to the background
    
  // update Engine
    Engine.update(engine);
   // create raindrops by frame count
    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -100,10);
      raindrops.push(raindrop);
    }

    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(20);
      raindrops[i].display();
    } 

    
       
  
    drawSprites();
}   

