let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

document.getElementById('submitGuess').addEventListener('click', function() {
    let userGuess = Number(document.getElementById('userGuess').value);
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    attempts--;
    if (userGuess > randomNumber) {
        document.getElementById('feedback').textContent = "Your number is high";
    } else if (userGuess < randomNumber) {
        document.getElementById('feedback').textContent = "Your number is low";
    } else {
        document.getElementById('feedback').textContent = `Congratulations! You guessed it right in ${5 - attempts} attempts.`;
        document.getElementById('submitGuess').disabled = true;
        document.getElementById('restartGame').style.display = 'inline-block';
        return;
    }

    if (attempts > 0) {
        document.getElementById('chances').textContent = `You have ${attempts} Chances`;
    } else {
        document.getElementById('feedback').textContent = `Game over! The correct number was ${randomNumber}.`;
        document.getElementById('submitGuess').disabled = true;
        document.getElementById('restartGame').style.display = 'inline-block';
    }
});

document.getElementById('restartGame').addEventListener('click', function() {
    attempts = 5;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('feedback').textContent = "Guess a number from 1 to 100";
    document.getElementById('chances').textContent = "You have 5 Chances";
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('restartGame').style.display = 'none';
    document.getElementById('userGuess').value = '';
});
