// var userName = prompt("What is your name?");
// alert(`Hi, ${userName}. Welcome to Banana Talk!`);

var userText = document.querySelector("textarea[name='user-text']");
var bananaText = document.querySelector("#banana-text");
var btnTranslate = document.querySelector(".btn-translate");
var serverURL = "https://api.funtranslations.com/translate/minion.json";


btnTranslate.addEventListener("click", btnTranslateClick);
function btnTranslateClick(e) {
  e.preventDefault();

  let text = userText.value; 
  if(text!=="") {
    fetchFromURL(text);
  }
  else {
    alert('Please enter text to be translated!');
  }
}

function fetchFromURL(text) {
  fetch(getTranslationURL(text))
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      bananaText.innerText = json.contents.translated;
    })
    .catch((err) => {
      console.log("error occurred " + err)
      alert('Sorry. Some error occurred! Try after sometime.');
    });
}

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}



