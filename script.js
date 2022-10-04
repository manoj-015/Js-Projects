'use strict';
let highScore = 0;
let currScore = 20;
let randomNumber = Math.round(Math.random() * 100);
randomNumber = randomNumber % 21;

// if user want to game again
document.querySelector('.again').addEventListener('click', function () {
    currScore = 20;
    randomNumber = Math.round(Math.random() * 100);
    randomNumber = randomNumber % 21;
})

// if 'check' button is clicked manipulate the dom acc. to currScores.
document.querySelector('.check').addEventListener('click', function () {
    let userGuess = document.querySelector('.guess').value;
    userGuess = Number(userGuess);
    currScore = currScore - 1;
    console.log(userGuess);
    if (userGuess === randomNumber) {
        currScore += 1;
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.label-score').textContent = `💯 Score: ${currScore}`;
        highScore = (currScore > highScore) ? currScore : highScore;
        document.querySelector('.label-highscore').textContent = `🥇 Highscore: ${highScore}`;
        console.log("Correct Prediction");
        return;
    }
    else if (userGuess !== randomNumber && currScore >= 0) {
        document.querySelector('.message').textContent = "📉 Too low!";
        document.querySelector('.message').textContent = "📉 Too high!"
        document.querySelector('.label-score').textContent = `💯 Score: ${currScore}`;
    }
    else {
        document.querySelector('.label-score').textContent = `💯 Score: ${0} :( `;
        document.querySelector('.message').textContent = "💥 You lost the game!";
        document.querySelector('body').style.backgroundColor = 'red';
    }

})