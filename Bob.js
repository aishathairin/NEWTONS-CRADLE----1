class Bob
{
    constructor (x,y,r)
    {
        var options = 
        {
            'isStatic' : false,
            'restitution' : 1.0,
            'friction' : 0.3,
            'density' : 1.2
        }
    this.x = x;
    this.y = y;
     this.r = r;
     this.body = Bodies.circle(this.x,this.y,this.r,options);
     World.add(world,this.body);
    }
    display(){
        var bobPosition = this.body.position;
        push ();
        fill ("white");
        translate(bobPosition.x, bobPosition.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r);
        pop ();
}
}