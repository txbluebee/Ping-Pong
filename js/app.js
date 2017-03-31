$(document).ready(function(){

/****Business Logic****/
  function pingpong(number) {
// count up to the provided number and put them inside array
    var numberArray = [];
    for (var i=1; i<= number; i++) {
      numberArray.push(i);
    }
//Loop through array
    for (var i=0; i <numberArray.length; i++) {
    //numbers divisible by 3 & 5, replaced it with "ping-pong"
      if (numberArray[i]%3 === 0 && numberArray[i]%5 === 0 ) {
        numberArray[i] = "Ping-Pong";
      }
    //numbers divisible by 3, replaced it with "ping"
      if (numberArray[i]%3 === 0 ) {
        numberArray[i] = "Ping";
      }
    //numbers divisible by 5, replaced it with "pong"
      if (numberArray[i]%5 === 0 ) {
        numberArray[i] = "Pong";
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

    //verify if the user input is number or text.
    if (userInput) {
      $("span.number").text(userInput);
      $("#result").show(result);
      $("#input").val(" ");
    } else {
      alert("Please enter a number");
    }
  });
});
