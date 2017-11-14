$(document).ready(function() {
  // Targets the text area of the form.
  let textField = $(".new-tweet").find("textarea[name='text']");
  // When the text area receives any input.
  textField.on("input", function() {
    // Sets total typed characters.
    let totalCharsTyped = $(this).val().length;
    // Sets remaining characters.
    let remainingChars = 140 - totalCharsTyped;
    // Selects the counter in this form.
    let charCounter = $(this).nextAll(".counter");
    // Replaces counter text with remaining counter amount.
    charCounter.text(remainingChars);
    // If they run out of characters.
    if (remainingChars < 0) {
      charCounter.addClass("error");
    } else {
      charCounter.removeClass("error");
    }
  });
});