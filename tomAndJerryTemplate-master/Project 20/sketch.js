

var  cat_sittingup, cat_running, cat_sitting 
var  mouse_cheese, Mouse, mouse_mag, mouse_thumbsup
var  backgroundImage

function preload() {
    //load the images here

    backgroundImage = loadImage ("images/garden.png");
    cat_running = loadAnimation ("images/cat2.png", "images/cat3.png");
    cat_sitting = loadAnimation ("images/cat1.png");
    cat_sittingup = loadAnimation ("images/cat4.png");
    mouse_cheese = loadAnimation ("images/mouse1.png");
    mouse_thumpsup = loadAnimation ("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat_running = createSprite (50,50,);
    cat_running.addAnimation ("cat_running" ,cat_running);

    mouse_thumpsup = createSprite (50,50,50,50);
    mouse_thumpsup.addAnimation ("mouse", mouse_thumpsup);
    
}

function draw() {

    background(255);
  
    //Write condition here to evalute if tom and jerry collide
    
    if (cat_running.x - mouse_thumpsup.x < (cat_running.width - mouse_thumpsup.width)/2)
    { 
        cat_running.velocityX=0;
        cat_running.addAnimation("cat_running" ,cat_running);
        cat_running.x =300;
        cat_running.scale=0.2;
        cat_running.changeAnimation("tomLastImage");
        mouse_thumpsup.addAnimation("mouse", mouse_thumpsup);
        mouse_thumpsup.scale=0.15;
        mouse_thumpsup.changeAnimation("jerryLastImage");
    

    drawSprites();
}
}

