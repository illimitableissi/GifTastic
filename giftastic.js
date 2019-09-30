//Array for One-Piece topic
var topics = ["luffy", "roronoa zoro", "usopp", "nami", "shanks", "portgas d. ace", "monkey d. garp", "sanji", "akainu", "kuzan", "dracule mihawk", "enel", "sabo"]

//Function to create buttons on HTML
function createButtons () {
    //clears buttons on HTML
    $("#buttons").empty();

    //For loop to produce buttons from array
    for (var i = 0; i < topics.length; i++) {
        var topicButtons = $("<button>");
        topicButtons.addClass("topic-button");
        topicButtons.attr("data-topic", topics[i])
        topicButtons.text(topics[i]);
        $('#buttons').append(topicButtons)
    }    
}   

//Function produces gifs and rating on click
function clickAction() {
    
    $(".topic-button").on("click", function(event) {
        event.preventDefault();
        var characterName =$(this).attr("data-topic")
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=kVuH86l1irJhDIHRaV7trtaOBiICrbNu&limit=10&q=" + characterName

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var results = response.data;
        //Loops through data array
        for (var g = 0; g < results.length; g++) {
            var gifs = $("<img>");
            gifs.attr("src", results[g].images.fixed_height.url);
            var rating = results[g].rating;
            var p = $("<p>").text("Rating: " + rating);          
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
        clickAction()
        })
        
//invokes functions
createButtons();
clickAction();