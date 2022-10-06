'use strict';

let user1Score = 0;
let user2Score = 0;
let isUser1 = true;
let score = 0;


const rollDiceEle = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const playerShow1 = document.querySelector('.player--0');
const playerShow2 = document.querySelector('.player--1');
const holdEle = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

const newGame = () => {
    resetGame();
}

const resetGame = () => {
    score1.textContent = 0;
    score2.textContent = 0;
    diceImg.classList.add('hidden');
    if (playerShow1.classList.contains('player-winner')) {
        playerShow1.classList.remove('player--winner');
    }
    if (playerShow2.classList.contains('player-winner')) {
        playerShow2.classList.remove('player-winner');
    }
    if (diceImg.classList.contains('hidden')) {
        diceImg.classList.remove('hidden');
    }
    if (rollDiceEle.classList.contains('hidden')) {
        rollDiceEle.classList.remove('hidden');
    }
}

const updateScore = () => {
    if (isUser1) {
        user1Score += score;
        if (user1Score >= 100) {
            won(1);
        }
        score = 0;
        switchUser();
    } else {
        user2Score += score;
        if (user2Score >= 100) {
            won(2);
        }
        score = 0;
        switchUser();
    }
}

const showScore = (x, y) => {
    score1.textContent = x;
    score2.textContent = y;
}

const won = (x) => {
    // make background color change
    // remove dice
    diceImg.classList.add('hidden');
    rollDiceEle.classList.add('hidden');

    if (x == 1) {
        playerShow1.classList.add('player--winner');
    } else {
        playerShow2.classList.add('player--winner');
    }
}
// playerShow2.classList.add('player--active');

const switchUser = () => {
    if (isUser1) {
        isUser1 = false;
        playerShow1.classList.remove('player--active');
        playerShow2.classList.add('player--active');
    } else {
        isUser1 = true;
        playerShow1.classList.add('player--active');
        playerShow2.classList.remove('player--active');
    }
}

const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    // if dice is hidden
    if (diceImg.classList.contains('hidden')) {
        diceImg.classList.remove('hidden');
    }
    // show dice img
    diceImg.src = `dice-${randomNumber}.png`;
    if (randomNumber === 1) {
        showScore(user1Score, user2Score);
        score = 0;
        switchUser();
    } else {
        score += randomNumber;
        if (isUser1) {
            if (user1Score + score >= 100) {
                won(1);
            }
            showScore(user1Score + score, user2Score);
        }
        else {
            if (user2Score + score >= 100) {
                won(2);
            }
            showScore(user1Score, user2Score + score);
        }
    }


}

resetGame();
rollDiceEle.addEventListener('click', rollDice);
newGameBtn.addEventListener('click', newGame);
holdEle.addEventListener('click', updateScore);

