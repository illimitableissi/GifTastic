//Array for One-Piece topic
var topics = ["luffy", "zorro", "usopp", "nami", "shanks", "white-beard", "garp", "sanji", "kaido", "akainu", "kuzan", "hawkeye mihawk", "enel", "sabo"]

//For loop to produce buttons for strings
for (var i = 0; i < topics.length; i++) {
    
 var topicButtons = $("<button>");
 topicButtons.addClass("topic-button");
 topicButtons.attr("data-topic", topics[i])
 topicButtons.text(topics[i]);
 $('#buttons').append(topicButtons)
}

//Defines function on click
$(".topic-button").on("click", function (event) {

    event.preventDefault();

var characterName =$(this).attr("data-topic")
    
    //retrieves data from GIPHY
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=kVuH86l1irJhDIHRaV7trtaOBiICrbNu&limit=10&q=" + characterName

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response.data);

var results = response.data;

for (var g = 0; g < results.length; g++) {

    console.log(results[g].url)

var gifs = $("<img>")
var rating = results[g].rating
var p = $("<p>").text("Rating: " + rating);

gifs.attr("src", results[g].url);


$("#gifs").append(gifs)
$("#gifs").append(p)

}

});


});


