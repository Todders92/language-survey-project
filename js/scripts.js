// Back end logic below:

// Front end logic below:
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var name = $("input#name").val();
    var question1 = parseInt($("select#question1").val());
    var question2 = parseInt($("select#question2").val());
    var question3 = parseInt($("select#question3").val());
    var question4 = parseInt($("select#question4").val());
    var question5 = parseInt($("select#question5").val());
    var question6 = parseInt($("select#question6").val());
    var score = question1 + question2 + question3 + question4 + question5 + question6
    if (score >= 20) {
      var answer = "CSS"
    } else if (score > 16 && score <= 19) {
      var answer = "JQuery"
    } else if (score > 12 && score <= 15) {
      var answer = "Ruby"
    } else {
      var answer = "python"
    }
    $(".name").text(name);
    $("#answer").text(answer);
    $("#results").show();
    event.preventDefault();
  });
});
