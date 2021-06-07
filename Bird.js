class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokyimage = loadImage("sprites/smoke.png");
    this.path=[]

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   var position = [this.body.position.x,this.body.position.y];
   this.path.push (position)
  
   for (var i = 0; i<this.path.length; i++) {
   image(this.smokyimage,this.path[i][0],this.path[i][1]);
   
   
  }
    super.display();
  }
}
