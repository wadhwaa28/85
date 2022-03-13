//Create a reference for canvas 
canvas =
document.getElementById('myCanvas');
ctx= canvas.getContext('2d');
//Give specific height and width to the car image
width= 75;
height= 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
x= 5;
y= 225;
function add() {
	//upload car, and background images on the canvas.
	background_imgTag= new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src= background_image;

	greencar_imageTag= new Image();
	greencar_imageTag.onload= uploadgreencar;
	greencar_imageTag.src= greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imageTag, x, y, width, height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	console.log(x);
	console.log(y);
	x= e.clientX;
	y= e.clientY;
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (y >= 0) {
		y= y - 10;
		uploadBackground;
		uploadgreencar;
	}
}

function down()
{
	//Define function to move the car downward
	if (y <= 500) {
		y= y + 10;
		uploadBackground;
		uploadgreencar;
	}
}

function left()
{
	//Define function to move the car left side
	if (x >= 0) {
		x= x - 10;
		uploadBackground;
		uploadgreencar;
	}
}

function right()
{
	//Define function to move the car right side
	if (x <= 700) {
		x= x + 10;
		uploadBackground;
		uploadgreencar;
	}
}
