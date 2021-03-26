class Slingshot {
    constructor(b1, p2) {
        var options = {
            bodyA: b1,
            pointB: p2,
            stiffness: 0.01,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
    this.sling.bodyA=null;
}
    display(){
         if (this.sling.bodyA!==null){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    } 
    }
}
