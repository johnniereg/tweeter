/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test code for function.
var tweetData = {
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
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};



function createTweetElement(tweetdata) {
  // Build the header element.
  let $header = $("<header>")
                  .append(`<img class="avatar" src="${tweetdata.user.avatars.small}">`)
                  .append(`<div class="name">${tweetdata.user.name}</div>`)
                  .append(`<div class="handle">${tweetdata.user.handle}</div>`);

  // Build the tweet section.
  let $section = $("<section>")
                  .append(`<div class="tweet-body">${tweetdata.content.text}</div>`);

  // Build the footer section.
  let $footer = $("<footer>")
                  .append(`<div class="tweet-date">${tweetdata.created_at}</div>`)
                  .append("<i class='fa fa-heart'>")
                  .append("<i class='fa fa-retweet'>")
                  .append("<i class='fa fa-flag'>");

  // Compile header, section, footer into article element.
  let theTweet = $("<article>").addClass("tweet")
                             .append($header)
                             .append($section)
                             .append($footer);
  return theTweet;
}


let $tweet = createTweetElement(tweetData);

console.log($tweet); // to see what it looks like

$(document).ready(function() {
  $('#tweets').append($tweet); // to add to page.
});



