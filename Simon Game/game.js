var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern= [];
var level = 0;
var started = false;

$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
}
);

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }else{
     var wrong = new Audio("sounds/wrong.mp3");
     wrong.play();
     $("body").addClass("game-over");

     setTimeout(function(){
        
     $("body").removeClass("game-over");
     },200);

     $("#" + "level-title").text("Game over!, Press any key to continue");
     startOver();
    }
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+ level);
    
     var randomNumber = Math.floor((Math.random() * 3) + 1);
     var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
    // var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    // audio.play();
    }
    
function startOver(){
    level = 0;
    started = false;
    gamePattern = [];
}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(btnColor){
    $("#"+ btnColor).addClass("pressed");
    setTimeout(function(){
        $("#" + btnColor).removeClass('pressed');
    },100);
}








