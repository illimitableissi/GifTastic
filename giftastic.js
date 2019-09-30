//Array for One-Piece topic
var topics = ["luffy", "roronoa zoro", "usopp", "nami", "shanks", "portgas d. ace", "monkey d. garp", "sanji", "akainu", "kuzan", "dracule mihawk", "enel", "sabo"]

function createButtons () {

    $("#buttons").empty();

//For loop to produce buttons for strings
    for (var i = 0; i < topics.length; i++) {
    
        var topicButtons = $("<button>");
        topicButtons.addClass("topic-button");
        topicButtons.attr("data-topic", topics[i])
        topicButtons.text(topics[i]);
        $('#buttons').append(topicButtons)
    }       

//Defines function on click
    $(".topic-button").on("click", function(event) {

        event.preventDefault();

    var characterName =$(this).attr("data-topic")
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=kVuH86l1irJhDIHRaV7trtaOBiICrbNu&limit=10&q=" + characterName

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response.data);

var results = response.data;

for (var g = 0; g < results.length; g++) {

    console.log(results[g].images.fixed_height.url)

var gifs = $("<img>")
var rating = results[g].rating
var p = $("<p>").text("Rating: " + rating);

gifs.attr("src", results[g].images.fixed_height.url);


$("#gifs").append(gifs)
$("#gifs").append(p)

}

});
});
}
//Creates new button from user input
    $("#find-character").on("click", function(event) {
        event.preventDefault();
        var input = $("#user-input").val().trim();
        topics.push(input);
        createButtons()
        })

createButtons()
