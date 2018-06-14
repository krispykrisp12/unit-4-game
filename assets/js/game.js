// Global Variables
var randomResults;
var wins = 0;
var losses = 0;
var count = 0;


// ================================

function startGame(){
    // random number is being generated 
    randomResults = Math.floor(Math.random() * 120) + 19;
    $("#randum-number").text(randomResults);

    var score = $("#score");
    // Data-number function called inside of start game


    // Resetting count variable and clearing score for next round
    $("#score").empty();
    count = 0;  

    
}

// ------------------------
// Calling the startGame function
startGame();
// ------------------------
// Random number function
function generate(){
    var random = Math.floor(Math.random() * 12) + 1;
    return random;

}


// Data function
function dataRandom(){
    $("#time").attr("data-number", generate());
    $("#space").attr("data-number", generate());
    $("#reality").attr("data-number", generate());
    $("#mind").attr("data-number", generate());
}

// -------------------------------
// Calling the dataRandom function
dataRandom();
// -------------------------------


// ========================================================
// Click function
$(".stone").on("click", function(){

    var number = parseInt($(this).attr("data-number"));

    count += number;

    $(score).text(" " + count);

    console.log(count);
    console.log(number);


    if(count > randomResults){
        alert("You lose, Play again");
        // increment the losses counter by 1
        losses++;
        $("#loss-counter").text(losses);
       startGame();
    }else if(count === randomResults){
        alert("You Win, play again");
        // increment the win counter by 1
        wins++;
        $("#win-counter").text(wins); 
        startGame();
    }
}); 
// ========================================================





