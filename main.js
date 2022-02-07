canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


img_width = 300;
img_height = 100;

var key_image ;

img_x = 100;
img_y = 100;

function add() {
	key_imgTag = new Image(); //defining a variable with a new image
	key_imgTag.onload = uploadImage; // setting a function, onloading this variable
	key_imgTag.src = background_image;   // load image

}

function uploadImage() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if((keyPressed >=97 && keyPressed<=122)||(keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			document.getElementById("key").innerHTML="You Pressed Alphabet Key";
			console.log("aplabetkey");
		}
		else if(keyPressed >=48 && keyPressed <=57)
		{
			numberkey();
			document.getElementById("key").innerHTML="You Pressed Number Key";
			console.log("numberkey")
		}

		else if(keyPressed >=37 && keyPressed<=40)
		{
			arrowkey();
			document.getElementById("key").innerHTML="You Pressed Arrow Key";
			console.log("arrowkey")
		}
		else if((keyPressed ==17)||(keyPressed==18)||(keyPressed==27))
		{
			specialkey();
			document.getElementById("key").innerHTML="You Pressed Special Key";
			console.log("specialkey");
		}
		else
		{
           otherkey();
		   document.getElementById("key").innerHTML="You Pressed Other Key";
		   console.log("otherkey");
		}
		
}
function alphabetKey()
{
	key_image="Alpkey.png";
	add();
}
function arrowKey()
{
	key_image="Arrkey.png";
	add();
}
function numberkey()
{
	key_image="numkey.png";
	add();
}
function otherkey()
{
	key_image="otherkey.png"
	add();
}
function specialkeu()
{
	key_image="spkey.png"
	add();
}