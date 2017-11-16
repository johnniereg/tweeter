$(document).ready(function() {
  // Targets the text area of the form.
  let textField = $(".new-tweet").find("textarea[name='text']");

  textField.on("input", function() {
    // Counts typed characters and sets remaining characters.
    let totalCharsTyped = $(this).val().length;
    let remainingChars = 140 - totalCharsTyped;

    // Replaces counter text with remaining counter amount.
    let charCounter = $(this).nextAll(".counter");
    charCounter.text(remainingChars);

    // If they run out of characters sets error class.
    if (remainingChars < 0) {
      charCounter.addClass("error");
    } else {
      charCounter.removeClass("error");
    }
  });
});