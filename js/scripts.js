// Back end logic below:

// Front end logic below:
$(document).ready(function() {
  $("form#test").submit(function(event) {
    var question1 = parseInt($("select#question1").val());
    var question2 = parseInt($("select#question2").val());
    var score = question1 + question2;
    if (score > 1) {
      var answer = "yes"
    }  
    else {
      var answer = "no"
    }
    $("#answer").text(answer);
    $("#results").show();
    event.preventDefault();
  });
});
