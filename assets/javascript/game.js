//have anatomy names. 

//choose randomly from these names.

//display the name 

//make the names blank letters. 

//record the letter that you choose

//replace the blanck space with the correct letter. 

//if not in the word then report it in the letters already guessed. 

//number of guesses remaining from the letters already guessed. 

//record wins if word completed

//report wins

//record loss

//after completion randomize the word and start over. 

var organ = ["amygdala", "fovea centralis", "ethmoid sinus", "uvula", "thyroid", "thymus", "Mitral Valve", "azygos vein", "adrenal glands", "popliteal vein", "brachial artery"];

var rand = organ[Math.floor(Math.random() * organ.length)];

choice = rand;


//changing the HTML 

document.getElementById("word").innerHTML = choice

document.getElementById("wordwithoutletters").innerHTML = choice

// change the image

function setimage (number) {
	document.getElementById("hangmanimg").removeAttribute("class").addClass("image" + number)
	
return setimage;
}

// key strokes

document.onkeyup = function() {
	var userguess = String.fromCharCode(event.keyCode);
	//toLowerCase();
	 console.log(userguess);
	 // reporting it back to HTML
	 function lettersOnly(){
	 	var charCode = event.keyCode;
	 	// if useguess == ('#letters')
	 	// 	document.querySelector('#wrongletters').innerHTML = userguess;

//checking if the key is similar to word or not
if ((userguess === choice))
	document.querySelector("#wordwithoutletters").innerHTML = userguess
else 
	document.querySelector("#wrongletters").innerHTML = userguess
	 }
}




//document.querySelector("#wrongletters").innerHTML = userguess
//if (( Charcode >64 && charCode < 91) || (charCode > 96 && charCode < 123 || charCode ==8))
	 		//return true;
	 	//else
	 		//return false;

//<input type="text" name"fname" value="" onkeypress="return lettersOnly(event)"/>