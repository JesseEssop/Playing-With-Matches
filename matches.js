var num = document.querySelector(".number");
var num2 = document.querySelector(".number2");
var num3 = document.querySelector(".number3");
var allNumbers = document.querySelector(".allNumbers");
var message = document.querySelector(".message")


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
num.innerHTML = getRandomArbitrary(1, 9).toFixed();
num2.innerHTML = getRandomArbitrary(1, 9).toFixed();
num3.innerHTML = getRandomArbitrary(1, 9).toFixed();
if (num.innerHTML == num2.innerHTML){
    num.classList.add("highlight");
    num2.classList.add("highlght");
    message.innerHTML = "ITS A MATCH!"

}if(num2.innerHTML == num3.innerHTML){
    num2.classList.add("highlight");
    num3.classList.add("highlight");
    message.innerHTML = "ITS A MATCH!"

}
if(num.innerHTML == num3.innerHTML){
    num.classList.add("highlight");
    num3.classList.add("highlight");
    message.innerHTML = "ITS A MATCH!"
}








