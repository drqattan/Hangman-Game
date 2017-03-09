<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <title>Hangman-Game Anatomy</title>
  </head>
  <body>
<div id="hangman">
<script type="text/javascript">
//have anatomy names. /

//choose randomly from these names.

//make the names blank letters. 

//record the letter that you choose

//replace the blanck space with the correct letter. 

//if not in the word then report it in the letters already guessed. 

//number of guesses remaining from the letters already guessed. 

//record wins if word completed

//report wins

//record loss

//after completion randomize the word and start over. 

<div id="organ"	var organ = ["amygdala", "fovea centralis", "ethmoid sinus", "uvula", "thyroid", "thymus", "Mitral Valve", "azygos vein", "adrenal glands", "popliteal vein", "brachial artery"];>
  
	function showstuff(rand) { document.getElementById(organ).innerHTML = [block]



	var rand = organ[Math.floor(Math.random() * organ.length)];


	for (var i = 0; i < organ.length; i++) {
       
       
       console.log(rand);
     	
         	}




var html =
  	"<h1> press any key to get start! </h1>" + 

	"<h1> Wins: " + wins + "</h1>" +

	"<h2> Word: "  rand " <span> id="rand"> </h2>" +

	"<h2>" Word without letters  ----- -------- "</h2>" +

	"<h2> Number of guesses remaining: "  # "</h2>" +

	"<h2> Letter already  guessed: " # "</h2>"

	document.querySelector('#game').innerHTML = html;

</script>
</div>
</body>
</html>