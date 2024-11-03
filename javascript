// script.js
let multiplier = 1.00;
let gameInterval;
let isGameActive = false;

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('cash-out-button').addEventListener('click', cashOut);

function startGame() {
    if (isGameActive) return;

    isGameActive = true;
    document.getElementById('cash-out-button').disabled = false;
    multiplier = 1.00;
    document.getElementById('multiplier').innerText = multiplier + 'x';

    gameInterval = setInterval(() => {
        multiplier = (Math.random() * 10).toFixed(2); // Random multiplier between 1 and 10
        document.getElementById('multiplier').innerText = multiplier + 'x';
    }, 1000);
}

function cashOut() {
    if (!isGameActive) return;

    clearInterval(gameInterval);
    isGameActive = false;
    document.getElementById('cash-out-button').disabled = true;
    alert('You cashed out at ' + multiplier + 'x!');
}
