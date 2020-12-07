class Launchers
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    fly()
    {
        this.throw.bodyA=null;
    }

    fly2(bodyA)
    {
        this.throw.bodyA=bodyA;
    }

    display()
    {
        strokeWeight(4);
        stroke("black")
    }
    
}