class Paper {
    constructor(x, y, width, height) {
      var options ={
        isStatic:false,
        'density':1.2,
        'resitution':0.3,
       'friction':1.0
      }
      this.body = Bodies.circle(56, 46, 55, 55,options);
      World.add(world, this.body);
    }
    display(){
      fill("blue");
      ellipse(56, 46, 55, 55);
    }
  
  }