const beginButton = document.getElementById('begin-button');
const daily = document.getElementById('daily');

var revealButton= document.getElementById('reveal-button');
var hideButton= document.getElementById('hide-button');
var firstGame= document.getElementById('first-game');
var thirdGame= document.getElementById('third-game');
var secondGame= document.getElementById('one-lie');
var leftIcon= document.getElementById('left-x-icon');
var rightIcon= document.getElementById('right-x-icon');

// When begin button is clicked, this will scroll to daily
function beginclicked(){
    daily.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
};

function revealClicked(){
    console.log("revealclicked!");
    firstGame.className = firstGame.className.replace("firstBefore", "game-reveal");
    thirdGame.className = thirdGame.className.replace("thirdBefore", "game-reveal");
    secondGame.className = secondGame.className.replace("lieBefore", "lie");
    leftIcon.style.display = "block";
    rightIcon.style.display = "block";
    revealButton.style.display = "none";
    hideButton.style.display = "block";
}

function hideClicked(){
    console.log("revealclicked!");
    firstGame.className = firstGame.className.replace("game-reveal", "firstBefore");
    thirdGame.className = thirdGame.className.replace("game-reveal", "thirdBefore");
    secondGame.className = secondGame.className.replace("lie", "lieBefore");
    leftIcon.style.display = "none";
    rightIcon.style.display = "none";
    hideButton.style.display = "none";
    revealButton.style.display = "block";

    console.log(secondGame.classList)
}






  