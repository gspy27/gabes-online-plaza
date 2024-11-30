const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum + 1))
const button = document.getElementById("submitBtn")
const answerText = document.getElementById("answer")

let attemps = 0;
let guess;
let running = true;

console.log(answer)

while(running){
    button.onclick = function() {
        guess = document.getElementById("guessTextBox").value;
        guess = Number(guess)

        if(isNaN(guess)) {
            window.alert("Please enter a valid number")
        }
        else if(guess < minNum || guess > maxNum){
            window.alert("Pleases enter a number between 1 and 100")
        }
        else{
            attemps++;
            if(guess < answer){
                answerText.textContent = "Try a higher number"
            }
            else if(guess > answer){
                answerText.textContent = "Try a lower number"
            }
            else{
                answerText.textContent = `Correct! The answer was ${answer}. It took you ${attemps} attemps to get it`
            }
        }
    }
    running = false;
}