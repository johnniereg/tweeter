/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  // Test code for function.
  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "<script>alert('uh oh!');</script>"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  // Builds the element for a unique tweet to add to HTML.
  function createTweetElement(tweet) {

    // Build the header element.
    const $header = $("<header>")
      .append(`<img class="avatar" src="${tweet.user.avatars.small}">`)
      .append(`<div class="name">${tweet.user.name}</div>`)
      .append(`<div class="handle">${tweet.user.handle}</div>`);

    // Build the tweet section.
    const $section = $("<section>")
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
      .append($header, $section, $footer);

    return $tweetElement;
  }

  // Given a database of tweets, render them on the index page.
  function renderTweets(tweets) {
    // Loops through tweet and creates element for each one.
    tweets.forEach(function(tweet) {
      // Adds the tweet element to the container.
      $('#tweets').append(createTweetElement(tweet));
    });
  }


  // Render tweets.
  renderTweets(data);

});



