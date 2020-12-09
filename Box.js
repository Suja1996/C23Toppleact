class Box{

constructor(x,y,width,height){

    var box_options ={
        restitution: 1.0
    }

    this.box = Bodies.rectangle(x,y,width,height, box_options);
    World.add(world,this.box);
    this.width=width
this.height=height

}


display(){

    var pos=this.box.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);



}





}