$(document).ready(function() {

    var wins = 0
    var losses = 0
    var targetScore;
    var pinkValue; 
    var blueValue;
    var greenValue;
    var yellowValue;
    var playerScore;

    $("button").click(function(){
        $("#rulebox").toggle();
    });

    reset();

    // Randomize crystal and targetscore after each win/loss and start of game
    function reset() {
        playerScore = 0;
        pinkValue = Math.floor(Math.random() * 12)+1;
        blueValue = Math.floor(Math.random() * 12)+1;
        greenValue = Math.floor(Math.random() * 12)+1;
        yellowValue = Math.floor(Math.random() * 12)+1;
        targetScore = Math.floor(Math.random() * 102)+ 19;
        $("#target-score").html("Try to match: " +  targetScore)
        console.log(targetScore)
    }

    // Turns images into buttons and prints the random crystal value 
    $("#pink").on("click", function() {
        playerScore = playerScore + pinkValue; 
        $("#player-score").text(playerScore)
    })
    $("#blue").on("click", function() {
        playerScore = playerScore + blueValue; 
        $("#player-score").text(playerScore)
    })
    $("#green").on("click", function() {
        playerScore = playerScore + greenValue; 
        $("#player-score").text(playerScore)
    })
    $("#yellow").on("click", function() {
        playerScore = playerScore + yellowValue; 
        $("#player-score").text(playerScore)
    })

    // Track win/losses and reset random values after each round
    document.addEventListener("click", function(){
        if (playerScore === targetScore) {
            wins++;
            $("#wins-text").text("Wins: " + wins);
            $("#player-score").text(" ");
            reset();
            alert("Hooray! You won!")
        }
        else if (playerScore > targetScore) {
            losses++;
            $("#losses-text").text("Losses: " + losses)
            $("#player-score").text(" ");
            reset();
            alert( "Sorry, You lost");
        }
    })
    
})