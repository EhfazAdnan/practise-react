let number = 0;

const button = document.querySelector("#button");
const display = document.querySelector("#display");

button.addEventListener("click", () => {
   number++;
   display.textContent = number;
});



let number1 = 0;

const button1 = document.querySelector("#button1");
const display1 = document.querySelector("#display1");

button1.addEventListener("click", () => {
   number1++;
   display1.textContent = number1;
});