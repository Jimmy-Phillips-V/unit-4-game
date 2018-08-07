
// Generates a random number between 19-120
var randNum;

// Wins n losses 
var wins = 0;
var losses = 0;
var counter = 0;

function startGame () {

// Score counter
counter = 0;
randNum = Math.floor(Math.random() * 102) +19;
$("#number-to-guess").text(randNum);

var crystalArray = ["assets/images/LOZ blue rupee.jpg", "assets/images/LOZ green rupee.jpg", "assets/images/LOZ purple rupee.jpg", "assets/images/LOZ red-rupee.jpg"]

// Empties crystal for restart
$(".crystals").empty();

for (var i = 0; i < crystalArray.length; i++) {
   // For each iteration, we will create an imageCrystal
   var newCrystal = $("<img>");
   // First each crystal will be given the class ".crystal-image".
   // This will allow the CSS to take effect.
   newCrystal.addClass("crystal-images");

   // Each imageCrystal will be given a src link to the crystal image
   newCrystal.attr("src", crystalArray[i]);

   // Each imageCrystal will be given a data attribute called data-crystalValue.
   // This data attribute will be set equal to the array value.
   newCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 14) +2);

   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
   $(".crystals").append(newCrystal);
 }
}
startGame()

$(".crystals").on("click", ".crystal-images", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseFloat(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    
    counter += crystalValue;
    $("#current-score").text(counter);

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === randNum) {
        wins++;
        $("#wins").text(wins);
        alert("You win!");
        startGame()
    }

    else if (counter >= randNum) {
        losses++;
        $("#losses").text(losses);
        alert("You lose!!");
        startGame()
    }

  });