canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_width = 100;
car_height = 180;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carx = 100;
cary = 225;

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, carx, cary, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == 38)
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == 40)
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == 37)
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == 39)
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (cary >= 0){
		cary = cary - 10;
		console.log("Up: x = " + carx + ", and y = " + cary);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (cary <= 500){
		cary = cary + 10;
		console.log("Down: x = " + carx + ", and y = " + cary);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (carx >= 0){
		carx = carx - 10;
		console.log("Left: x = " + carx + ", and y = " + cary);
		uploadBackground();
		uploadgreencar();
	}
}
function right()
{
	if (carx <= 700){
		carx = carx + 10;
		console.log("Right: x = " + carx + ", and y = " + cary);
		uploadBackground();
		uploadgreencar();
	}
}
