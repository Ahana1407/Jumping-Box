var canvas;
var music;
var box
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,400);

    //create 4 different surfaces
    block1 = createSprite(80,350,130,20)
    block1.shapeColor = "lime"

    block2 = createSprite(225,350,130,20)
    block2.shapeColor = "red"

    block3 = createSprite(370,350,130,20)
    block3.shapeColor = "purple"

    block4 = createSprite(515,350,130,20)
    block4.shapeColor = "cyan"

    //create box sprite and give velocity
    box = createSprite(random(20,750),100,50,50)
    box.shapeColor = "white"
    box.velocityX = 5
    box.velocityY = 5
}

function draw() {
    background(0);
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges)

//add condition to check if box touching surface and make it box
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor = "lime";
        music.play()
    }

    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor = "red"
        music.play()
    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor = "purple"
        music.play()
    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor = "cyan"
        music.play()
    }

    drawSprites()
}
