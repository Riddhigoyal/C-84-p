canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var carWidth=100;
var carHeight=90;

var carX=10;
var carY=10;

images=["road.jpg"];
randomNumber=Math.floor(Math.random()*4);
console.log (randomNumber);

background_image=images;
car_image="pc.jpg";

function add(){
     bg_img=new Image();
    bg_img.onload=uploadbackground;
    bg_img.src=background_image;


     car_img=new Image();
    car_img.onload=uploadcar;
    car_img.src=pc.jpg;
}

function uploadbackground(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_img,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keyPress=e.keyCode;
    console.log (keyPress);

    if(keyPress=='37'){
        left();
        console.log ("left key is pressed");
    }

    if(keyPress=='38'){
        up();
        console.log ("up key is pressed");
    }

    if(keyPress=='39'){
        right();
        console.log ("right key is pressed");
    }

    if(keyPress=='40'){
        down();
        console.log ("down key is pressed");
    }
}

