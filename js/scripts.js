$(document).ready(function() {
  $("#form").submit(function(event) {
event.preventDefault();
const inputtedSentence = $("#sentence").val()
$(".result").text(inputtedSentence)
$("#output").show();

  })
})