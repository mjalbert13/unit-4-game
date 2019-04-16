// Global varaiables
var counter = 0;
var wins = 0;
var losses = 0;
var randomNumber = 0;
var ruby = 0;
var diamond = 0;
var saphire = 0;
var emrald = 0;

// game starts with 4 crystals(each has a random numb 1-12)
// and a random computer number between 19 -120
// initialize game
$(document).ready(function(){

    randomNumber = Math.floor(Math.random() * 101+19);
    $("#computer-number").text(randomNumber);

    ruby = Math.floor(Math.random() * 11 +1);
    diamond = Math.floor(Math.random() * 11 +1);
    saphire = Math.floor(Math.random() * 11+1);
    emrald = Math.floor(Math.random() * 11 +1);

    $("#wins").text("Wins " + wins);
    $("#losses").text("Losses " + losses);
    $("#score").text(counter);

    // set up restart funtion to start new game
    function reStart(){
        randomNumber = Math.floor(Math.random() * 101+19);
        $("#computer-number").text(randomNumber);

        ruby = Math.floor(Math.random() * 11 +1);
        diamond = Math.floor(Math.random() * 11 +1);
        saphire = Math.floor(Math.random() * 11+1);
        emrald = Math.floor(Math.random() * 11 +1);

        counter = 0;
       
        $("#score").text(counter);
        $("#val1").text("");
        $("#val2").text("");
        $("#val3").text("");
        $("#val4").text("");
    }
// if counter = target say you win and restart
    function winner(){
        if(counter === randomNumber){
            wins++;
            alert("Winner winner");
            $("#wins").text("Wins " + wins);
            reStart();
        }
    }
// if counter > target number say you lost and restart
    function loser(){
        if(counter > randomNumber){
            losses++;
            alert("you lost");
            $("#losses").text("Losses " + losses);
            reStart();
        }
    }
// On click count goes up by the value of crystal clicked and checks for win/loss
    $("#ruby").on("click", function() {
        counter += ruby;
        $("#val1").text(ruby);
        $("#score").text(counter);
        winner();
        loser();
    })

    $("#diamond").on("click", function(){
        counter += diamond;
        $("#val2").text(diamond);
        $("#score").text(counter);
        winner();
        loser();
    })

    $("#saphire").on("click", function(){
        counter += saphire;
        $("#val3").text(saphire);
        $("#score").text(counter);
        winner();
        loser();
    })

    $("#emrald").on("click", function(){
        counter += emrald;
        $("#val4").text(emrald);
        $("#score").text(counter);
        winner();
        loser();
    })
})