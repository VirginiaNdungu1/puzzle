//Backend Logic
//removeVowels function takes the split sentence, checks for vowels and substitutes them with -
function removeVowels (splitSentence){
  
    for(var index= 0; index<splitSentence.length; index++){
      if (splitSentence[index]==="a" || splitSentence[index]==="A" || splitSentence[index]==="e" || splitSentence[index]==="E" || splitSentence[index]==="i" || splitSentence[index]==="I" || splitSentence[index]==="o" || splitSentence[index]==="O" || splitSentence[index]==="u" || splitSentence[index]==="U"){
    splitSentence[index] = "-";
     }
      console.log(splitSentence);
    };
    return splitSentence;
}

//Front-End Logic
$(document).ready(function(){
  $(".puzzle form").submit(function(event){
    event.preventDefault();
    //Store the user input into an array
var userInput = [$("#sentence").val()].toString();
//Test
//console.log(userInput);

//Clone the Array and Split it
var cloneuserInput = userInput.split("");
//Test
//console.log(cloneuserInput);

//Calling the removeVowels to work on the variable cloneUserInput inside a new variable newSentence
var newSentence =removeVowels(cloneuserInput).join("");
//Test
//console.log(newSentence);


// Show newSentence inside a new paragraph in the division class output
  $(".output").append("<p>" + newSentence + "</p>");

});
});
