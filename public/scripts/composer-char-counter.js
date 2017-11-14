console.log("Script loaded.");

// function updateCharCount() {
//   let maxChar = 140;
//   let
// }

$(document).ready(function() {

  console.log("Document Ready.");

  let textField = $("textarea[name='text']");

  $(textField).on("input", function() {
    console.log("Input received.");

    let inputText = textField.val();
    let totalCharsTyped = inputText.length;


    console.log(inputText);
    console.log(totalCharsTyped);
  });

});