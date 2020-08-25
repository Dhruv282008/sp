class Paper {
    constructor(){
        var options = {
            'restitution':0.8,
            'friction':10,
            'density':1.0
        }
       Matter.Bodies.circle(x,y,radius,[options], [maxSides]);
    }
}