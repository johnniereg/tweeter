console.log("Script loaded.");

$(document).ready(function() {

  console.log("Document Ready.");

  $(".new-tweet").on("input", function() {
    console.log("Input received.");
  });

});