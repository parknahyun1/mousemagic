let grids = [];
let us = [];
let choicesrgbs = [0,255];



let grid;


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 10);
  //background(0);

}

function mousePressed(){
   
   let grid = new Grid(); 
   grids.push(grid);
   
 }

function draw() {
  //blendMode(MULTIPLY);
  background(0);
  //clear();
 
  if(grids.length > 0){
   for(i = 0; i < grids.length; i ++){

    
   grids[i].move();
   grids[i].display();
    
   }
  }
}


class Grid {
  constructor(){
    this.x = 5;
    this.y = 5;
  
    this.rippleStartX = mouseX;
    this.rippleStartY = mouseY;
    
    this.rgbs = random(1,3);
 
      this.r = random(220);
      this.g = random(200);
      this.b = abs(120);
 

      
    this.ripple = 0;
  }
  move(){
    this.ripple = this.ripple + 2;
    
   
  }
  display(){
if(this.ripple < width/2){
    for(this.x = 5; this.x <= windowWidth; this.x = this.x + 10){
      for( this.y = 5;  this.y <= windowHeight;  this.y =  this.y + 10){
        if(dist( this.rippleStartX,this.rippleStartY,this.x, this.y) < this.ripple + 10 && dist(this.rippleStartX,this.rippleStartY,this.x, this.y) > this.ripple - 10){
          
          
          noStroke();
          fill(this.r,this.g,this.b);
        ellipse(this.x, this.y,random((dist( -this.rippleStartX/2,-this.rippleStartY/2,-this.x/2, -this.y/2))*0.3));
  
        }
  
        }
      }
    }
}
   
  
  }
