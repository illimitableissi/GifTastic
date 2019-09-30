var topics = ["luffy", "zorro", "usopp", "nami", "shanks", "white-beard", "garp", "sanji", "kaido", "akainu", "kuzan", "hawkeye mihawk", "enel", "sabo"]

for (var i = 0; i < topics.length; i++) {
    console.log(topics[i])
    
 var topicButtons = $("<button>");
 topicButtons.addClass("topic-button");
 topicButtons.attr("data-topic", topics[i])
 topicButtons.text(topics[i]);
 $('#buttons').append(topicButtons)
}

//retrieves data from GIPHY
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LLRsXitZT7K4vhgyb93ZywTnts1I57hX&limit=10&q="


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

//Defines function on click
$(".topic-button").on("click", function () {

});


