var bg, bgImg;
var solo;
var cactus1, cactus1Img;
var cactus2, cactus2Img;
var moto, motoImg;
var obstaclesGroup;
var obstacle;
var gameState="play";
var button;
button.visible=false;

function preload(){
    bgImg = loadImage("./img/background_desert.png");
    cactus1Img = loadImage("./img/cactus_01.png");
    cactus2Img = loadImage("./img/cactus_02.png");
    motoImg = loadImage("./img/motoside_09.png");
}

function setup() {
    createCanvas(1000,750);

    solo = createSprite(30,700,1000,5);
    solo.visible = false;

    // cactus1 = createSprite(350,650);
    // cactus1.addImage(cactus1Img);
    // cactus1.scale=0.2;

    // cactus2 = createSprite(750,650);
    // cactus2.addImage(cactus2Img);
    // cactus2.scale=0.2;

    moto = createSprite(150,650);
    moto.addImage(motoImg);
    moto.scale=0.9;

    obstaclesGroup = createGroup();
    button = createButton("Reiniciar");
    button.position(500,400);
    button.size(70,40);

    button.mouseClicked(reset);
    
}

function draw() {
background(bgImg);

if(gameState==="play"){
    button.visible=false;


if(keyDown("space")){
    moto.velocityY= -7;
}

//if(keyDown("right")){
//   moto.velocityX= +5;
//}

moto.velocityY= moto.velocityY+0.2;

moto.collide(solo);

obstacles()
}

drawSprites();

if(obstaclesGroup.isTouching(moto)){
    textSize(30);
    text("Game Over",500,375);
    obstaclesGroup.setVelocityXEach(0);
    moto.velocityY=0;
    button.visible=true;
}
}

function obstacles(){
    if(frameCount%100===0){
        var obstacle= createSprite(750,650,20,20);
        obstacle.velocityX= -4;
        obstacle.scale=0.2;

        var rand=Math.round(random(1,2));
        switch(rand){
            case 1: obstacle.addImage(cactus1Img);
            break;
            case 2: obstacle.addImage(cactus2Img);
            break;
            default:break;
        }
        obstaclesGroup.add(obstacle);
    }
}
function reset(){
    gameState="play";
    obstaclesGroup.setVelocityXEach(0);
}