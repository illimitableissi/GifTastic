//Array for One-Piece topic
var topics = ["luffy", "roronoa zoro", "usopp", "nami", "shanks", "portgas d. ace", "monkey d. garp", "sanji", "akainu", "kuzan", "dracule mihawk", "enel", "sabo"," tony tony chopper"]

//Function to create buttons on HTML
function createButtons () {
    //clears buttons on HTML
    $("#buttons").empty();

    //For loop to produce buttons from array
    for (var i = 0; i < topics.length; i++) {
        var topicButtons = $("<button>");
        topicButtons.addClass("btn btn-info");
        topicButtons.attr("data-topic", topics[i])
        topicButtons.text(topics[i]);
        $('#buttons').append(topicButtons)
    }    
}   

//Function produces gifs and rating on click
function clickAction() {
    
    $(".btn-info").on("click", function(event) {
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
            gifs.addClass("card-img-top");
            gifs.attr("src", results[g].images.fixed_height_still.url);
            gifs.attr("data-still", results[g].images.fixed_height_still.url);
            gifs.attr("data-animate", results[g].images.fixed_height.url);
            gifs.attr("data-state", "still");
            var rating = results[g].rating;
            var p = $("<p>")
            p.addClass("card-text text-center")
            p.text("Rating: " + rating);         
            $("#gifs").append(gifs)
            $("#gifs").append(p) 
    
            $(gifs).on("click", function() {
                // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                var state = $(this).attr("data-state");          
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  // Then, set the image's data-state to animate
                  $(this).attr("data-state", "animate");
                // Else set src to the data-still value
                } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
                    }
                   var confirmClick = confirm("Do want want to make this gif a favorite?");
                    if (confirmClick) {
                        var favoriteImg = $("<img>")
                        favoriteImg.attr("src", $(this).attr("src"))
                        $("#favorites").append(favoriteImg)
                   }
                })
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
