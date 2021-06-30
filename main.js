// var userName = prompt("What is your name?");
// alert(`Hi, ${userName}. Welcome to Banana Talk!`);

var userText = document.querySelector("textarea[name='user-text']");
var bananaText = document.querySelector("#banana-text");
var btnTranslate = document.querySelector(".btn-translate");
var serverURL = "https://api.funtranslations.com/translate/minion.json";


btnTranslate.addEventListener("click", btnTranslateClick);
function btnTranslateClick(e) {
  console.log(userText.value);
  const text = userText.value;

  fetch(getTranslationURL(text))
    .then((response) => response.json())
    .then((json) => {
      bananaText.innerHTML = json.contents.translated;
    })
    .catch((err) => console.log("error occurred " + err));
}

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}



