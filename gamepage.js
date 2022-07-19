// random value generated
var y = Math.floor(Math.random() * 10 + 1);
  
// counting the number of guesses
var x = document.getElementById("guessField").value;


// made for correct Guess
if (x == y){
    alert("congratulations!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + playername +"you guess it right in " + guess + " guess");
        guess = 1;
}else if(x>y){
    guess++;
    alert('oops sorry!try a smaller number');
}else{
    guess++;
    alert('oops sorry!try a greater number');
}

  
// function for number guessed by user     
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}