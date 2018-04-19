// First Version .. Without Refactoring
var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 =document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn'); // (try command + d )

easyBtn.addEventListener('click',function(){
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	numSquare = 3 ;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor(); 
	// pickColor is a function which return a colors[random]
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
	}
	}
 });

hardBtn.addEventListener('click',function(){
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numSquare = 6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	// pickColor is a function which return a colors[random]
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function() {

	colors = generateRandomColors(numSquare);
	// Here i dont mention numSquare because i reset to the default value which is now inn!
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	this.textContent = "NEW COLORS";
	// also i can write (resetButton.textContent = "NEW COLORS")
	// we write (this) keywork because we work inside the listener !
	for(var i = 0; i < squares.length; i++ ){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";			// remember: you spend alot because if (#)!!!!!
});

colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++ ){

	squares[i].style.background = colors[i];
	// squares[i] take the value of colors[i]

	squares[i].addEventListener('click',function(){

	var clickedColor = this.style.background;

		if (clickedColor === pickedColor){
			messageDisplay.textContent = 'Correct';
			resetButton.textContent = "Play Again ?"
			changeColor(clickedColor);
			h1.style.background = clickedColor // or (=pickedColor)
		} else {
			this.style.background = '#232323';
			messageDisplay.textContent = 'Try Again ';
		}
	});
}
function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}






