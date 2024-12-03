const myButton = document.getElementById("myButton")
const myLabel = document.getElementById("myLabel")
let min = 0;
let max = 0;
let randomNum;

myButton.onclick = function() {
    min = document.getElementById("minText").value;
    max = document.getElementById("maxText").value;
    min = Number(min)
    max = Number(max)
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}