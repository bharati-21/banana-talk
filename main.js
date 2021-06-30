// var userName = prompt("What is your name?");
// alert(`Hi, ${userName}. Welcome to Banana Talk!`);

var userText = document.querySelector("#user-text");
var bananaText = document.querySelector("#banana-text");
var btnTranslate = document.querySelector(".btn-translate");

btnTranslate.addEventListener("click", btnTranslateClick);

function btnTranslateClick(e) {
  console.log(userText.value);
}



