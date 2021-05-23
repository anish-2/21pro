var canvas;
var music;
var blue,yellow,purple,green;
var box;
var topSprite,leftSprite,rightSprite,bottomSprite;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blue = createSprite(80,598,200,40);
    blue.depth = background.depth;
    blue.depth = background.depth+1;
    blue.shapeColor = ("blue");

    yellow = createSprite(280,598,180,40);
    yellow.depth = background.depth;
    yellow.depth = background.depth+1;
    yellow.shapeColor = ("yellow");

    purple = createSprite(480,598,200,40);
    purple.depth = background.depth;
    purple.depth = background.depth+1;
    purple.shapeColor = ("purple");

    green = createSprite(700,598,200,40);
    green.depth = background.depth;
    green.depth = background.depth+1;
    green.shapeColor = ("green");

    box = createSprite(450,200,50,50);
    box.velocityX = 2;
    box.velocityY = 3;
    box.shapeColor = ("white");

    leftSprite = createSprite(10,800,10,100000);
    leftSprite.shapeColor = ("white");

    rightSprite = createSprite(790,10,10,100000);
    rightSprite.shapeColor = ("white");

    topSprite = createSprite(10,10,10000,10);
    topSprite.shapeColor = ("white");

    bottomSprite = createSprite(800,600,100000,10);
    bottomSprite.shapeColor = ("white");
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(topSprite);
    box.bounceOff(leftSprite);
    box.bounceOff(rightSprite);
    box.bounceOff(bottomSprite);

if(box.x<0){
    music.stop()
    box.velocityX = 3;
}else if(box.x>800){
    music.stop()
    box.velocityX = 3;
}

if(box.isTouching(yellow)){
    music.play()
    box.shapeColor = ("yellow");
    box.bounceOff(yellow);
}
else if(box.isTouching(purple)){
    music.play()
    box.shapeColor = ("purple");
    box.bounceOff(purple);
}
else if(box.isTouching(green)){
    music.play()
    box.shapeColor = ("green");
    box.bounceOff(green);
}
else if(box.isTouching(blue)){
    music.play()
    box.shapeColor = ("blue");
    box.bounceOff(blue);
}   
    drawSprites();
    //add condition to check if box touching surface and make it box
}
