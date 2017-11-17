$(document).ready(function() {

  // Builds the element for a unique tweet to add to HTML.
  function createTweetElement(tweet) {

    // Build the header element.
    const $header = $("<header>")
      .append(`<img class="avatar" src="${tweet.user.avatars.small}">`)
      .append(`<div class="name">${tweet.user.name}</div>`)
      .append(`<div class="handle">${tweet.user.handle}</div>`);

    // Build the tweet section.
    const $main = $("<main>")
      // Using a different method here to protect against cross-site scripting.
      .append("<div>").text(tweet.content.text).addClass("tweet-body");

    // Determine how many days ago the tweet was created.
    const daysAgo = Math.floor((Date.now() - tweet.created_at) / (1000 * 60 * 60 * 24));

    // Constructs icon group for insertion into footer.
    const flagIcon = "<i class='fa fa-flag'></i>";
    const retweetIcon = "<i class='fa fa-retweet'></i>";
    const heartIcon = "<i class='fa fa-heart'></i>";
    const faviconBlock = flagIcon + retweetIcon + heartIcon;

    // Build the footer section.
    const $footer = $("<footer>")
      .append(`<div class="tweet-date">${daysAgo} days ago</div>`)
      .append(`<div class='favicons'>${faviconBlock}</div>`);

    // Compile header, section, footer into article element.
    const $tweetElement = $("<article class='tweet'>")
      .append($header, $main, $footer);

    return $tweetElement;
  }

  // Given a database of tweets, render them on the index page.
  function renderTweets(tweets) {
    // Clears out the section before rendering with new tweets.
    $('#tweets').empty();
    // Loops through tweets and creates element for each one.
    tweets.forEach(function(tweet) {
      // Adds the tweet element to the container.
      $('#tweets').prepend(createTweetElement(tweet));
    });
  }

  // How to handle submit tweet behaviour.
  function submitTweet(event) {
    // Stops page from redirecting/reloading.
    event.preventDefault();

    // Selects the form input text.
    const $tweetForm = $(this).find("form");
    const tweetText = $tweetForm.serialize();

    // Sends flash messages if tweet empty or too long.
    if (tweetText.length <= 5) {
      $.flash("Tweet can't be empty.");
    } else if (tweetText.length > 145) {
      $.flash("Tweet must be 140 characters or less.");
    } else {
      // Makes a POST request using form data.
      $.ajax({
        type: "POST",
        url: "/tweets/",
        data: tweetText
      })
      // Reloads tweets,clears the text area and resets counter.
        .done(function() {
          loadTweets();
          $tweetForm.find("textarea").val("");
          $tweetForm.find(".counter").text("140");
        });
    }
  }

  // Use AJAX to get all tweets and then render them.
  function loadTweets() {
    $.ajax({
      type: "GET",
      url: "/tweets/",
      dataType: "json", // converts result to JSON
      success: function (result) {
        renderTweets(result);
      }
    });
  }

  // Loads existing tweets when document is ready.
  loadTweets();

  // Adds event listener for new-tweet submissions.
  $(".new-tweet").on("submit", submitTweet);

  // Slide animation and focus to text area for compose button.
  $(".compose").on("click", function() {
    $(window).scrollTop(0);
    $(".new-tweet").slideToggle().find("textarea").focus();

  });

  // Slide animations for login/register button
  $(".user-action").on("click", function() {
    $(window).scrollTop(0);
    $(".users").slideToggle();
  });

  $(".register-new").on("click", function() {
    $(".register").show();
    $(".login").hide();
  });

  $(".login-now").on("click", function() {
    $(".login").show();
    $(".register").hide();
  });


});
