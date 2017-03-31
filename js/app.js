$(document).ready(function(){

/****Business Logic****/
  function pingpong(number) {
// Convert number into array
    var numberArray = [];
    for (var i=1; i<= number; i++) {
      numberArray.push(i);
    }
//Loop through array
    for (var i=0; i <numberArray.length; i++) {
    //numbers divisible by 3 & 5, replaced it with "ping-pong"
      if (numberArray[i]%3 === 0 && numberArray[i]%5 === 0 ) {
        numberArray[i] = "pingpong";
      }
    //numbers divisible by 3, replaced it with "ping"
      if (numberArray[i]%3 === 0 ) {
        numberArray[i] = "ping";
      }
    //numbers divisible by 5, replaced it with "pong"
      if (numberArray[i]%5 === 0 ) {
        numberArray[i] = "pong";
      }
    }
    //Loop through array and append it under unorder list
    for (var i=0; i< numberArray.length; i++) {
      $("#list").append("<li>" + numberArray[i] + "</li>");
    }
  }

  /****User InterFace Logic****/
  $("#pingpong").submit(function(event){
    event.preventDefault();
    $("#list").empty();
    var userInput = $("#input").val();
    userInput = parseInt(userInput);
    var result = pingpong(userInput);
    if (userInput) {
      $("#result").show(result);
    } else {
      alert("Please enter a number");
    }
  });
});
