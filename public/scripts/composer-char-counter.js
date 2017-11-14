$(document).ready(function() {
  // Targets the text area of the form.
  let textField = $(".new-tweet").find("textarea[name='text']");
  // When the text area receives any input.
  $(textField).on("input", function() {
    // Sets total typed characters.
    let totalCharsTyped = $(this).val().length;
    // Sets remaining characters.
    let remainingChars = 140 - totalCharsTyped;
    // Selects the counter in this form.
    let charCounter = $(this).closest(".new-tweet").find(".counter");
    // Replaces counter text with remaining counter amount.
    charCounter.text(remainingChars);
    // Adds class of "negative" in order to colour counter red.
    if (remainingChars < 0) {
      charCounter.addClass("negative");
    }
    // If user brings tweet back into character limit, remove negative class.
    if (remainingChars >= 0) {
      charCounter.removeClass("negative");
    }
  });
});