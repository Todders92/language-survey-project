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
      $("#css").show();
      $("#rust").hide();
      $("#jquery").hide();
      $("#ruby").hide();
      $("#python").hide();
    } else if (score > 16 && score <= 19) {
      var answer = "JQuery"
      $("#css").hide();
      $("#rust").hide();
      $("#jquery").show();
      $("#ruby").hide();
      $("#python").hide();
    } else if (score > 12 && score <= 15) {
      var answer = "Ruby"
      $("#css").hide();
      $("#rust").hide();
      $("#jquery").hide();
      $("#ruby").show();
      $("#python").hide();
    } else if (score > 7 && score <= 11) {
      var answer = "Rust"
      $("#css").hide();
      $("#rust").show();
      $("#jquery").hide();
      $("#ruby").hide();
      $("#python").hide();
    }
    else if (score > 1 && score <=6) {
      var answer = "Python"
      $("#css").hide();
      $("#rust").hide();
      $("#jquery").hide();
      $("#ruby").hide();
      $("#python").show();
    }
    $(".name").text(name);
    $("#answer").text(answer);
    $("#results").show();
    event.preventDefault();
  });
});
