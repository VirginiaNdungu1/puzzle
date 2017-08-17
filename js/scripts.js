//Backend Logic
function userSentence (){
  var userInput = [$("#sentence").val()].toString();
  var cloneuserInput = userInput.split("");
    for(var index= 0; index<cloneuserInput.length; index++){
      if (cloneuserInput[index]==="a" || cloneuserInput[index]==="A" || cloneuserInput[index]==="e" || cloneuserInput[index]==="E" || cloneuserInput[index]==="i" || cloneuserInput[index]==="I" || cloneuserInput[index]==="o" || cloneuserInput[index]==="O" || cloneuserInput[index]==="u" || cloneuserInput[index]==="U"){
    cloneuserInput[index] = "-";
     }
      console.log(cloneuserInput);
    };
    return cloneuserInput;
}

//Front-End Logic
$(document).ready(function(){
  $(".puzzle form").submit(function(event){
    event.preventDefault();
var userInput = [$("#sentence").val()].toString();
//Clone the Array and Split it
var cloneuserInput = userInput.split("");
console.log(cloneuserInput);

var jointoutput =userSentence();
console.log(jointoutput());
var joinInput.join(" ");
console.log(joinInput);
  $(".output").text("<p>" + joinInput + "</p>");

});
});
