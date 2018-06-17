
var elem = document.getElementById('mydiv');
var params = { width: 800, height: 600 };
var two = new Two(params).appendTo(elem);


var xcoord = 175;		//coordinates
var ycoord = 125;

var rect = two.makeRectangle(225,275, 450, 500);		//make jar
var sea = two.makeRectangle(225, 300, 450, 450);			//make lid
sea.fill = '#33FFF9';

var xsp = 60;				//spacing between beans
var ysp = 40;
var beans = [];
var eyes	= [];
var tails =[];
var mouths =[];		//arrays to identify beans
var original_colour_old = 'orange';
var mark_colour_old = 'red';
var original_colour_new = 'orange';
var mark_colour_new = 'red';




//for loops to create 50 beans

for (i = 0; i < 5; i++) {


	for (j = 0; j < 10; j++) {

		var tail = two.makePolygon(75+xsp*i,125+ysp*j,15,3)
		tail.fill = original_colour_old
		tail.rotation = (Math.PI)/2
		var body = two.makeEllipse(100+xsp*i, 125+ysp*j, 25, 15)
		body.fill = original_colour_old
		var eye = two.makeCircle(110+xsp*i,120+ysp*j,2)
		eye.fill = 'black'
		var mouth = two.makeLine(113+xsp*i,130+ysp*j,123+xsp*i,130+ysp*j)


		beans.push(body)
		eyes.push(eye)
		mouths.push(mouth)
		tails.push(tail)


		}

}


two.update();



document.getElementById('Mark').disabled = 'disabled';
document.getElementById('Shuffle').disabled = 'disabled';
document.getElementById('Submit2').disabled = 'disabled';
document.getElementById('Shuffle1').disabled = 'disabled';
document.getElementById('Submit3').disabled = 'disabled';
document.getElementById('Shuffle2').disabled = 'disabled';
document.getElementById('Submit4').disabled = 'disabled';
document.getElementById('Shuffle3').disabled = 'disabled';
document.getElementById('Submit5').disabled = 'disabled';
document.getElementById('Shuffle4').disabled = 'disabled';

function updatecolour(){
	original_colour_new = document.getElementById('OriginalColour').value;
	mark_colour_new = document.getElementById('MarkingColour').value;
	try{
		if(original_colour_new == mark_colour_new) throw "The marking colour must be different to the original colour"
	}
	catch(err){
		if(original_colour_new == mark_colour_new){
			alert ("The marking colour must be different to the original colour")
		}
	}

	finally{
		if(original_colour_new != mark_colour_new){

			for (i = 0; i< 50; i++){
				if (beans[i].fill == original_colour_old){
					  beans[i].fill = original_colour_new
						tails[i].fill = original_colour_new

				}
		  	else if (beans[i].fill == mark_colour_old){
					beans[i].fill = mark_colour_new
					tails[i].fill = mark_colour_new

				}
		   }
			 original_colour_old = original_colour_new
		 	 mark_colour_old = mark_colour_new
		 }

  two.update();
	}

}


function moveone(){
	var input = document.getElementById('numberofbeans').value;		//reads input
	try {
			if(String(input) == "") throw "Please enter an integer between 1 and 50";
			else if(isNaN(String(input))) throw "Please enter an integer between 1 and 50";
			else if(input < 1) throw "Please enter an integer between 1 and 50";
			else if(input > 50) throw "Please enter an integer between 1 and 50";
			else if(input != Math.floor(input)) throw "Please enter an integer between 1 and 50";
	}
	catch(err){
		if(String(input) == ""){
			alert("Please enter an integer between 1 and 50")
		}
		else if(isNaN(String(input))){
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input < 1) {
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input > 50) {
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input != Math.floor(input)) {
			alert ("Please enter an integer between 1 and 50")
		}
	}
	finally{

		if( input >= 1 && input <= 50 && input == Math.floor(input)) {


			function getRandomInt(min, max) {			//random number
  			return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
			}



			for (k=0; k < input; k++ ) {		//moves beans

				rnd = getRandomInt(0, 50);
				while(beans[rnd].translation.x==xcoord+350||beans[rnd].translation.x==xcoord+410||beans[rnd].translation.x==xcoord+470||beans[rnd].translation.x==xcoord+530||beans[rnd].translation.x==xcoord+590) {			//while loop so that same bean is not selected more than once
					rnd = getRandomInt(0, 50);
				}

				if (k < 10) {

					beans[rnd].translation.x=xcoord+350;
					beans[rnd].translation.y=ycoord+k*ysp;
					mouths[rnd].translation.x=xcoord+18+350;
					mouths[rnd].translation.y=ycoord+5+k*ysp;
					eyes[rnd].translation.x=xcoord+10+350;
					eyes[rnd].translation.y=ycoord-5+k*ysp;
					tails[rnd].translation.x=xcoord-25+350;
					tails[rnd].translation.y=ycoord+k*ysp;



				} 	else if ( 10 <= k && k < 20)	{

					beans[rnd].translation.x=xcoord+410;
					beans[rnd].translation.y=ycoord+(k-10)*ysp;
					mouths[rnd].translation.x=xcoord+18+410;
					mouths[rnd].translation.y=ycoord+5+(k-10)*ysp;
					eyes[rnd].translation.x=xcoord+10+410;
					eyes[rnd].translation.y=ycoord-5+(k-10)*ysp;
					tails[rnd].translation.x=xcoord-25+410;
					tails[rnd].translation.y=ycoord+(k-10)*ysp;

				}	 else if ( 20 <= k && k < 30)	{

					beans[rnd].translation.x=xcoord+470;
					beans[rnd].translation.y=ycoord+(k-20)*ysp;
					mouths[rnd].translation.x=xcoord+18+470;
					mouths[rnd].translation.y=ycoord+5+(k-20)*ysp;
					eyes[rnd].translation.x=xcoord+10+470;
					eyes[rnd].translation.y=ycoord-5+(k-20)*ysp;
					tails[rnd].translation.x=xcoord-25+470;
					tails[rnd].translation.y=ycoord+(k-20)*ysp;

				}	else if ( 30 <= k && k < 40)	{

					beans[rnd].translation.x=xcoord+530;
					beans[rnd].translation.y=ycoord+(k-30)*ysp;
					mouths[rnd].translation.x=xcoord+18+530;
					mouths[rnd].translation.y=ycoord+5+(k-30)*ysp;
					eyes[rnd].translation.x=xcoord+10+530;
					eyes[rnd].translation.y=ycoord-5+(k-30)*ysp;
					tails[rnd].translation.x=xcoord-25+530;
					tails[rnd].translation.y=ycoord+(k-30)*ysp;

				}	else if ( 40 <= k && k < 50) {

					beans[rnd].translation.x=xcoord+590;
					beans[rnd].translation.y=ycoord+(k-40)*ysp;
					mouths[rnd].translation.x=xcoord+18+590;
					mouths[rnd].translation.y=ycoord+5+(k-40)*ysp;
					eyes[rnd].translation.x=xcoord+10+590;
					eyes[rnd].translation.y=ycoord-5+(k-40)*ysp;
					tails[rnd].translation.x=xcoord-25+590;
					tails[rnd].translation.y=ycoord+(k-40)*ysp;


				}

			}

			document.getElementById('Submit').disabled = 'disabled';
			document.getElementById('Mark').disabled = false;
			two.update()
		}
	}

}

function mark() {

	for (i=0; i<50; i++) {

		if (beans[i].translation.x==xcoord+350||beans[i].translation.x==xcoord+410||beans[i].translation.x==xcoord+470||beans[i].translation.x==xcoord+530||beans[i].translation.x==xcoord+590) {
			beans[i].fill = mark_colour_new
			tails[i].fill = mark_colour_new
		}

	}
	document.getElementById('Mark').disabled = 'disabled';
	document.getElementById('Shuffle').disabled = false;

	two.update();
}

function shuffle() {
	for(i=0;i<50;i++){
		two.remove(beans[i]);
		two.remove(tails[i]);
		two.remove(eyes[i]);
		two.remove(mouths[i]);
	}

	beans.splice(0)
	tails.splice(0)
	eyes.splice(0)
	mouths.splice(0)

	for (i = 0; i < 5; i++) {


		for (j = 0; j < 10; j++) {

			var tail = two.makePolygon(75+xsp*i,125+ysp*j,15,3)
			tail.fill = original_colour_new
			tail.rotation = (Math.PI)/2
			var body = two.makeEllipse(100+xsp*i, 125+ysp*j, 25, 15)
			body.fill = original_colour_new
			var eye = two.makeCircle(110+xsp*i,120+ysp*j,2)
			eye.fill = 'black'
			var mouth = two.makeLine(113+xsp*i,130+ysp*j,123+xsp*i,130+ysp*j)

			beans.push(body)
			eyes.push(eye)
			mouths.push(mouth)
			tails.push(tail)


			}

	}


	var input = document.getElementById('numberofbeans').value;

	for (k=0; k < input; k++) {

		function getRandomInt(min, max) {						//marks #input random number of beans
  		return Math.floor(Math.random() * (max - min)) + min;
		}

		rnd = getRandomInt(0, 50);


		while(beans[rnd].fill == mark_colour_new){
			rnd = getRandomInt(0, 50);
		}
		beans[rnd].fill = mark_colour_new
		tails[rnd].fill = mark_colour_new
	}


	document.getElementById('Shuffle').disabled = 'disabled';
	document.getElementById('Submit2').disabled = false;


	two.update()

}

function movetwo(){

	var input = document.getElementById('numberofbeans2').value;		//reads input
	try {
			if(String(input) == "") throw "Please enter an integer between 1 and 50";
			else if(isNaN(String(input))) throw "Please enter an integer between 1 and 50";
			else if(input < 1) throw "Please enter an integer between 1 and 50";
			else if(input > 50) throw "Please enter an integer between 1 and 50";
			else if(input != Math.floor(input)) throw "Please enter an integer between 1 and 50";
	}
	catch(err){
		if(String(input) == ""){
			alert("Please enter an integer between 1 and 50")
		}
		else if(isNaN(String(input))){
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input < 1) {
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input > 50) {
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input != Math.floor(input)) {
			alert ("Please enter an integer between 1 and 50")
		}
	}
	finally{
		if( input >= 1 && input <= 50 && input == Math.floor(input)) {
			function getRandomInt(min, max) {			//random number
  			return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
			}

			for (k=0; k < input; k++ ) {		//moves beans
				rnd = getRandomInt(0, 50);
				while(beans[rnd].translation.x==xcoord+350||beans[rnd].translation.x==xcoord+410||beans[rnd].translation.x==xcoord+470||beans[rnd].translation.x==xcoord+530||beans[rnd].translation.x==xcoord+590) {			//while loop so that same bean is not selected more than once
					rnd = getRandomInt(0, 50);
				}

				if (k < 10) {

					beans[rnd].translation.x=xcoord+350;
					beans[rnd].translation.y=ycoord+k*ysp;
					mouths[rnd].translation.x=xcoord+18+350;
					mouths[rnd].translation.y=ycoord+5+k*ysp;
					eyes[rnd].translation.x=xcoord+10+350;
					eyes[rnd].translation.y=ycoord-5+k*ysp;
					tails[rnd].translation.x=xcoord-25+350;
					tails[rnd].translation.y=ycoord+k*ysp;



				} 	else if ( 10 <= k && k < 20)	{

					beans[rnd].translation.x=xcoord+410;
					beans[rnd].translation.y=ycoord+(k-10)*ysp;
					mouths[rnd].translation.x=xcoord+18+410;
					mouths[rnd].translation.y=ycoord+5+(k-10)*ysp;
					eyes[rnd].translation.x=xcoord+10+410;
					eyes[rnd].translation.y=ycoord-5+(k-10)*ysp;
					tails[rnd].translation.x=xcoord-25+410;
					tails[rnd].translation.y=ycoord+(k-10)*ysp;

				}	 else if ( 20 <= k && k < 30)	{

					beans[rnd].translation.x=xcoord+470;
					beans[rnd].translation.y=ycoord+(k-20)*ysp;
					mouths[rnd].translation.x=xcoord+18+470;
					mouths[rnd].translation.y=ycoord+5+(k-20)*ysp;
					eyes[rnd].translation.x=xcoord+10+470;
					eyes[rnd].translation.y=ycoord-5+(k-20)*ysp;
					tails[rnd].translation.x=xcoord-25+470;
					tails[rnd].translation.y=ycoord+(k-20)*ysp;

				}	else if ( 30 <= k && k < 40)	{

					beans[rnd].translation.x=xcoord+530;
					beans[rnd].translation.y=ycoord+(k-30)*ysp;
					mouths[rnd].translation.x=xcoord+18+530;
					mouths[rnd].translation.y=ycoord+5+(k-30)*ysp;
					eyes[rnd].translation.x=xcoord+10+530;
					eyes[rnd].translation.y=ycoord-5+(k-30)*ysp;
					tails[rnd].translation.x=xcoord-25+530;
					tails[rnd].translation.y=ycoord+(k-30)*ysp;

				}	else if ( 40 <= k && k < 50) {

					beans[rnd].translation.x=xcoord+590;
					beans[rnd].translation.y=ycoord+(k-40)*ysp;
					mouths[rnd].translation.x=xcoord+18+590;
					mouths[rnd].translation.y=ycoord+5+(k-40)*ysp;
					eyes[rnd].translation.x=xcoord+10+590;
					eyes[rnd].translation.y=ycoord-5+(k-40)*ysp;
					tails[rnd].translation.x=xcoord-25+590;
					tails[rnd].translation.y=ycoord+(k-40)*ysp;


				}

			}

			document.getElementById('Submit2').disabled = 'disabled';
			document.getElementById('Shuffle1').disabled = false;
			two.update()
		}
	}
}

function shuffle1() {
	for(i=0;i<50;i++){
		two.remove(beans[i]);
		two.remove(tails[i]);
		two.remove(eyes[i]);
		two.remove(mouths[i]);
	}

	beans.splice(0)
	tails.splice(0)
	eyes.splice(0)
	mouths.splice(0)

	for (i = 0; i < 5; i++) {   //redraws 50 beans


		for (j = 0; j < 10; j++) {

			var tail = two.makePolygon(75+xsp*i,125+ysp*j,15,3)
			tail.fill = original_colour_new
			tail.rotation = (Math.PI)/2
			var body = two.makeEllipse(100+xsp*i, 125+ysp*j, 25, 15)
			body.fill = original_colour_new
			var eye = two.makeCircle(110+xsp*i,120+ysp*j,2)
			eye.fill = 'black'
			var mouth = two.makeLine(113+xsp*i,130+ysp*j,123+xsp*i,130+ysp*j)

			beans.push(body)
			eyes.push(eye)
			mouths.push(mouth)
			tails.push(tail)
		}
	}
	var input = document.getElementById('numberofbeans').value;

	for (k=0; k < input; k++) {

		function getRandomInt(min, max) {						//marks #input random number of beans
			return Math.floor(Math.random() * (max - min)) + min;
		}

		rnd = getRandomInt(0, 50);


		while(beans[rnd].fill == mark_colour_new){
			rnd = getRandomInt(0, 50);
		}
		beans[rnd].fill = mark_colour_new
		tails[rnd].fill = mark_colour_new
	}


	document.getElementById('Shuffle1').disabled = 'disabled';
	document.getElementById('Submit3').disabled = false;


	two.update()

	}

function movethree(){
	var input = document.getElementById('numberofbeans3').value;		//reads input
	try {
			if(String(input) == "") throw "Please enter an integer between 1 and 50";
			else if(isNaN(String(input))) throw "Please enter an integer between 1 and 50";
			else if(input < 1) throw "Please enter an integer between 1 and 50";
			else if(input > 50) throw "Please enter an integer between 1 and 50";
			else if(input != Math.floor(input)) throw "Please enter an integer between 1 and 50";
	}
	catch(err){
		if(String(input) == ""){
			alert("Please enter an integer between 1 and 50")
		}
		else if(isNaN(String(input))){
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input < 1) {
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input > 50) {
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input != Math.floor(input)) {
			alert ("Please enter an integer between 1 and 50")
		}
	}
	finally{
		if( input >= 1 && input <= 50 && input == Math.floor(input)) {
			function getRandomInt(min, max) {			//random number
  			return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
			}

			for (k=0; k < input; k++ ) {		//moves beans

				rnd = getRandomInt(0, 50);
				while(beans[rnd].translation.x==xcoord+350||beans[rnd].translation.x==xcoord+410||beans[rnd].translation.x==xcoord+470||beans[rnd].translation.x==xcoord+530||beans[rnd].translation.x==xcoord+590) {			//while loop so that same bean is not selected more than once
					rnd = getRandomInt(0, 50);
				}

				if (k < 10) {

					beans[rnd].translation.x=xcoord+350;
					beans[rnd].translation.y=ycoord+k*ysp;
					mouths[rnd].translation.x=xcoord+18+350;
					mouths[rnd].translation.y=ycoord+5+k*ysp;
					eyes[rnd].translation.x=xcoord+10+350;
					eyes[rnd].translation.y=ycoord-5+k*ysp;
					tails[rnd].translation.x=xcoord-25+350;
					tails[rnd].translation.y=ycoord+k*ysp;



				} 	else if ( 10 <= k && k < 20)	{

					beans[rnd].translation.x=xcoord+410;
					beans[rnd].translation.y=ycoord+(k-10)*ysp;
					mouths[rnd].translation.x=xcoord+18+410;
					mouths[rnd].translation.y=ycoord+5+(k-10)*ysp;
					eyes[rnd].translation.x=xcoord+10+410;
					eyes[rnd].translation.y=ycoord-5+(k-10)*ysp;
					tails[rnd].translation.x=xcoord-25+410;
					tails[rnd].translation.y=ycoord+(k-10)*ysp;

				}	 else if ( 20 <= k && k < 30)	{

					beans[rnd].translation.x=xcoord+470;
					beans[rnd].translation.y=ycoord+(k-20)*ysp;
					mouths[rnd].translation.x=xcoord+18+470;
					mouths[rnd].translation.y=ycoord+5+(k-20)*ysp;
					eyes[rnd].translation.x=xcoord+10+470;
					eyes[rnd].translation.y=ycoord-5+(k-20)*ysp;
					tails[rnd].translation.x=xcoord-25+470;
					tails[rnd].translation.y=ycoord+(k-20)*ysp;

				}	else if ( 30 <= k && k < 40)	{

					beans[rnd].translation.x=xcoord+530;
					beans[rnd].translation.y=ycoord+(k-30)*ysp;
					mouths[rnd].translation.x=xcoord+18+530;
					mouths[rnd].translation.y=ycoord+5+(k-30)*ysp;
					eyes[rnd].translation.x=xcoord+10+530;
					eyes[rnd].translation.y=ycoord-5+(k-30)*ysp;
					tails[rnd].translation.x=xcoord-25+530;
					tails[rnd].translation.y=ycoord+(k-30)*ysp;

				}	else if ( 40 <= k && k < 50) {

					beans[rnd].translation.x=xcoord+590;
					beans[rnd].translation.y=ycoord+(k-40)*ysp;
					mouths[rnd].translation.x=xcoord+18+590;
					mouths[rnd].translation.y=ycoord+5+(k-40)*ysp;
					eyes[rnd].translation.x=xcoord+10+590;
					eyes[rnd].translation.y=ycoord-5+(k-40)*ysp;
					tails[rnd].translation.x=xcoord-25+590;
					tails[rnd].translation.y=ycoord+(k-40)*ysp;


				}


			}

			document.getElementById('Submit3').disabled = 'disabled';
			document.getElementById('Shuffle2').disabled = false;
			two.update()
		}
	}
}

function shuffle2() {
	for(i=0;i<50;i++){
		two.remove(beans[i]);
		two.remove(tails[i]);
		two.remove(eyes[i]);
		two.remove(mouths[i]);
	}
		beans.splice(0)
		tails.splice(0)
		eyes.splice(0)
		mouths.splice(0)

	for (i = 0; i < 5; i++) {   //redraws 50 beans


		for (j = 0; j < 10; j++) {

			var tail = two.makePolygon(75+xsp*i,125+ysp*j,15,3)
			tail.fill = original_colour_new
			tail.rotation = (Math.PI)/2
			var body = two.makeEllipse(100+xsp*i, 125+ysp*j, 25, 15)
			body.fill = original_colour_new
			var eye = two.makeCircle(110+xsp*i,120+ysp*j,2)
			eye.fill = 'black'
			var mouth = two.makeLine(113+xsp*i,130+ysp*j,123+xsp*i,130+ysp*j)

			beans.push(body)
			eyes.push(eye)
			mouths.push(mouth)
			tails.push(tail)
		}
	}
	var input = document.getElementById('numberofbeans').value;

	for (k=0; k < input; k++) {

		function getRandomInt(min, max) {						//marks #input random number of beans
			return Math.floor(Math.random() * (max - min)) + min;
		}

		rnd = getRandomInt(0, 50);


		while(beans[rnd].fill == mark_colour_new){
			rnd = getRandomInt(0, 50);
		}
		beans[rnd].fill = mark_colour_new
		tails[rnd].fill = mark_colour_new
	}

	document.getElementById('Shuffle2').disabled = 'disabled';
	document.getElementById('Submit4').disabled = false;


	two.update()

}

function movefour(){
	var input = document.getElementById('numberofbeans4').value;		//reads input
	try {
			if(String(input) == "") throw "Please enter an integer between 1 and 50";
			else if(isNaN(String(input))) throw "Please enter an integer between 1 and 50";
			else if(input < 1) throw "Please enter an integer between 1 and 50";
			else if(input > 50) throw "Please enter an integer between 1 and 50";
			else if(input != Math.floor(input)) throw "Please enter an integer between 1 and 50";
	}
	catch(err){
		if(String(input) == ""){
			alert("Please enter an integer between 1 and 50")
		}
		else if(isNaN(String(input))){
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input < 1) {
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input > 50) {
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input != Math.floor(input)) {
			alert ("Please enter an integer between 1 and 50")
		}
	}
	finally{
		if( input >= 1 && input <= 50 && input == Math.floor(input)) {
			function getRandomInt(min, max) {			//random number
  			return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
			}

			for (k=0; k < input; k++ ) {		//moves beans

				rnd = getRandomInt(0, 50);
				while(beans[rnd].translation.x==xcoord+350||beans[rnd].translation.x==xcoord+410||beans[rnd].translation.x==xcoord+470||beans[rnd].translation.x==xcoord+530||beans[rnd].translation.x==xcoord+590) {			//while loop so that same bean is not selected more than once
					rnd = getRandomInt(0, 50);
				}

				if (k < 10) {

					beans[rnd].translation.x=xcoord+350;
					beans[rnd].translation.y=ycoord+k*ysp;
					mouths[rnd].translation.x=xcoord+18+350;
					mouths[rnd].translation.y=ycoord+5+k*ysp;
					eyes[rnd].translation.x=xcoord+10+350;
					eyes[rnd].translation.y=ycoord-5+k*ysp;
					tails[rnd].translation.x=xcoord-25+350;
					tails[rnd].translation.y=ycoord+k*ysp;



				} 	else if ( 10 <= k && k < 20)	{

					beans[rnd].translation.x=xcoord+410;
					beans[rnd].translation.y=ycoord+(k-10)*ysp;
					mouths[rnd].translation.x=xcoord+18+410;
					mouths[rnd].translation.y=ycoord+5+(k-10)*ysp;
					eyes[rnd].translation.x=xcoord+10+410;
					eyes[rnd].translation.y=ycoord-5+(k-10)*ysp;
					tails[rnd].translation.x=xcoord-25+410;
					tails[rnd].translation.y=ycoord+(k-10)*ysp;

				}	 else if ( 20 <= k && k < 30)	{

					beans[rnd].translation.x=xcoord+470;
					beans[rnd].translation.y=ycoord+(k-20)*ysp;
					mouths[rnd].translation.x=xcoord+18+470;
					mouths[rnd].translation.y=ycoord+5+(k-20)*ysp;
					eyes[rnd].translation.x=xcoord+10+470;
					eyes[rnd].translation.y=ycoord-5+(k-20)*ysp;
					tails[rnd].translation.x=xcoord-25+470;
					tails[rnd].translation.y=ycoord+(k-20)*ysp;

				}	else if ( 30 <= k && k < 40)	{

					beans[rnd].translation.x=xcoord+530;
					beans[rnd].translation.y=ycoord+(k-30)*ysp;
					mouths[rnd].translation.x=xcoord+18+530;
					mouths[rnd].translation.y=ycoord+5+(k-30)*ysp;
					eyes[rnd].translation.x=xcoord+10+530;
					eyes[rnd].translation.y=ycoord-5+(k-30)*ysp;
					tails[rnd].translation.x=xcoord-25+530;
					tails[rnd].translation.y=ycoord+(k-30)*ysp;

				}	else if ( 40 <= k && k < 50) {

					beans[rnd].translation.x=xcoord+590;
					beans[rnd].translation.y=ycoord+(k-40)*ysp;
					mouths[rnd].translation.x=xcoord+18+590;
					mouths[rnd].translation.y=ycoord+5+(k-40)*ysp;
					eyes[rnd].translation.x=xcoord+10+590;
					eyes[rnd].translation.y=ycoord-5+(k-40)*ysp;
					tails[rnd].translation.x=xcoord-25+590;
					tails[rnd].translation.y=ycoord+(k-40)*ysp;


				}

			}
			document.getElementById('Submit4').disabled = 'disabled';
			document.getElementById('Shuffle3').disabled = false;
			two.update()
		}
	}
}

function shuffle3() {
	for(i=0;i<50;i++){
		two.remove(beans[i]);
		two.remove(tails[i]);
		two.remove(eyes[i]);
		two.remove(mouths[i]);
	}
	beans.splice(0)
	tails.splice(0)
	eyes.splice(0)
	mouths.splice(0)

	for (i = 0; i < 5; i++) {   //redraws 50 beans


		for (j = 0; j < 10; j++) {

			var tail = two.makePolygon(75+xsp*i,125+ysp*j,15,3)
			tail.fill = original_colour_new
			tail.rotation = (Math.PI)/2
			var body = two.makeEllipse(100+xsp*i, 125+ysp*j, 25, 15)
			body.fill = original_colour_new
			var eye = two.makeCircle(110+xsp*i,120+ysp*j,2)
			eye.fill = 'black'
			var mouth = two.makeLine(113+xsp*i,130+ysp*j,123+xsp*i,130+ysp*j)

			beans.push(body)
			eyes.push(eye)
			mouths.push(mouth)
			tails.push(tail)
		}
	}
	var input = document.getElementById('numberofbeans').value;

	for (k=0; k < input; k++) {

		function getRandomInt(min, max) {						//marks #input random number of beans
			return Math.floor(Math.random() * (max - min)) + min;
		}

		rnd = getRandomInt(0, 50);


		while(beans[rnd].fill == mark_colour_new){
			rnd = getRandomInt(0, 50);

		}
		beans[rnd].fill = mark_colour_new
		tails[rnd].fill = mark_colour_new


		document.getElementById('Shuffle3').disabled = 'disabled';
		document.getElementById('Submit5').disabled = false;


		two.update()
	}
}

function movefive(){
	var input = document.getElementById('numberofbeans5').value;		//reads input
	try {
			if(String(input) == "") throw "Please enter an integer between 1 and 50";
			else if(isNaN(String(input))) throw "Please enter an integer between 1 and 50";
			else if(input < 1) throw "Please enter an integer between 1 and 50";
			else if(input > 50) throw "Please enter an integer between 1 and 50";
			else if(input != Math.floor(input)) throw "Please enter an integer between 1 and 50";
	}
	catch(err){
		if(String(input) == ""){
			alert("Please enter an integer between 1 and 50")
		}
		else if(isNaN(String(input))){
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input < 1) {
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input > 50) {
			alert ("Please enter an integer between 1 and 50")
		}
		else if(input != Math.floor(input)) {
			alert ("Please enter an integer between 1 and 50")
		}
	}
	finally{
		if( input >= 1 && input <= 50 && input == Math.floor(input)) {
			function getRandomInt(min, max) {			//random number
  			return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
			}

			for (k=0; k < input; k++ ) {		//moves beans

				rnd = getRandomInt(0, 50);
				while(beans[rnd].translation.x==xcoord+350||beans[rnd].translation.x==xcoord+410||beans[rnd].translation.x==xcoord+470||beans[rnd].translation.x==xcoord+530||beans[rnd].translation.x==xcoord+590) {			//while loop so that same bean is not selected more than once
					rnd = getRandomInt(0, 50);
				}

				if (k < 10) {

					beans[rnd].translation.x=xcoord+350;
					beans[rnd].translation.y=ycoord+k*ysp;
					mouths[rnd].translation.x=xcoord+18+350;
					mouths[rnd].translation.y=ycoord+5+k*ysp;
					eyes[rnd].translation.x=xcoord+10+350;
					eyes[rnd].translation.y=ycoord-5+k*ysp;
					tails[rnd].translation.x=xcoord-25+350;
					tails[rnd].translation.y=ycoord+k*ysp;



				} 	else if ( 10 <= k && k < 20)	{

					beans[rnd].translation.x=xcoord+410;
					beans[rnd].translation.y=ycoord+(k-10)*ysp;
					mouths[rnd].translation.x=xcoord+18+410;
					mouths[rnd].translation.y=ycoord+5+(k-10)*ysp;
					eyes[rnd].translation.x=xcoord+10+410;
					eyes[rnd].translation.y=ycoord-5+(k-10)*ysp;
					tails[rnd].translation.x=xcoord-25+410;
					tails[rnd].translation.y=ycoord+(k-10)*ysp;

				}	 else if ( 20 <= k && k < 30)	{

					beans[rnd].translation.x=xcoord+470;
					beans[rnd].translation.y=ycoord+(k-20)*ysp;
					mouths[rnd].translation.x=xcoord+18+470;
					mouths[rnd].translation.y=ycoord+5+(k-20)*ysp;
					eyes[rnd].translation.x=xcoord+10+470;
					eyes[rnd].translation.y=ycoord-5+(k-20)*ysp;
					tails[rnd].translation.x=xcoord-25+470;
					tails[rnd].translation.y=ycoord+(k-20)*ysp;

				}	else if ( 30 <= k && k < 40)	{

					beans[rnd].translation.x=xcoord+530;
					beans[rnd].translation.y=ycoord+(k-30)*ysp;
					mouths[rnd].translation.x=xcoord+18+530;
					mouths[rnd].translation.y=ycoord+5+(k-30)*ysp;
					eyes[rnd].translation.x=xcoord+10+530;
					eyes[rnd].translation.y=ycoord-5+(k-30)*ysp;
					tails[rnd].translation.x=xcoord-25+530;
					tails[rnd].translation.y=ycoord+(k-30)*ysp;

				}	else if ( 40 <= k && k < 50) {

					beans[rnd].translation.x=xcoord+590;
					beans[rnd].translation.y=ycoord+(k-40)*ysp;
					mouths[rnd].translation.x=xcoord+18+590;
					mouths[rnd].translation.y=ycoord+5+(k-40)*ysp;
					eyes[rnd].translation.x=xcoord+10+590;
					eyes[rnd].translation.y=ycoord-5+(k-40)*ysp;
					tails[rnd].translation.x=xcoord-25+590;
					tails[rnd].translation.y=ycoord+(k-40)*ysp;


				}
			}
			document.getElementById('Submit5').disabled = 'disabled';
			document.getElementById('Shuffle4').disabled = false;
			two.update()
		}
	}
}

function shuffle4() {

	for(i=0;i<50;i++){
		two.remove(beans[i]);
		two.remove(tails[i]);
		two.remove(eyes[i]);
		two.remove(mouths[i]);
	}
	beans.splice(0)
	tails.splice(0)
	eyes.splice(0)
	mouths.splice(0)

	for (i = 0; i < 5; i++) {   //redraws 50 beans


		for (j = 0; j < 10; j++) {

			var tail = two.makePolygon(75+xsp*i,125+ysp*j,15,3)
			tail.fill = original_colour_new
			tail.rotation = (Math.PI)/2
			var body = two.makeEllipse(100+xsp*i, 125+ysp*j, 25, 15)
			body.fill = original_colour_new
			var eye = two.makeCircle(110+xsp*i,120+ysp*j,2)
			eye.fill = 'black'
			var mouth = two.makeLine(113+xsp*i,130+ysp*j,123+xsp*i,130+ysp*j)

			beans.push(body)
			eyes.push(eye)
			mouths.push(mouth)
			tails.push(tail)
		}
	}
	var input = document.getElementById('numberofbeans').value;

	for (k=0; k < input; k++) {

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}

		rnd = getRandomInt(0, 50);


		while(beans[rnd].fill == mark_colour_new){
			rnd = getRandomInt(0, 50);
		}
		beans[rnd].fill = mark_colour_new
		tails[rnd].fill = mark_colour_new
	}

	document.getElementById('Shuffle4').disabled = 'disabled';
	two.update();
}
