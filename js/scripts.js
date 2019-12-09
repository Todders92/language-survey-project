// Back end logic below:

// Front end logic below:
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var name = $("input#name").val();
    var help = parseInt($("select#help").val());
    var preference = parseInt($("select#preference").val());
    var animals = parseInt($("select#animals").val());
    var reading = parseInt($("select#reading").val());
    var coding = parseInt($("select#coding").val());
    var tv = parseInt($("select#tv").val());
    var score = help + preference + animals + reading + coding + tv
    if (score >= 20) {
      var answer = "CSS"
    } else if (score > 16 && score <= 19) {
      var answer = "JQuery"
    } else if (score > 12 && score <= 15) {
      var answer = "Ruby"
    } else if (score < 5 && score <= 11) {
      var answer = "rust"
    }
    else {
      var answer = "python"
    }
    $(".name").text(name);
    $("#answer").text(answer);
    $("#results").show();
    event.preventDefault();
  });
});
