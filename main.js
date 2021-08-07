// var userName = prompt("What is your name?");
// alert(`Hi, ${userName}. Welcome to Banana Talk!`);

var userText = document.querySelector("textarea[name='user-text']");
var bananaText = document.querySelector("#banana-text");
var btnTranslate = document.querySelector(".btn-translate");
var serverURL = "https://api.funtranslations.com/translate/minion.json";


btnTranslate.addEventListener("click", btnTranslateClick);
function btnTranslateClick(e) {
  bananaText.innerHTML = "";
  e.preventDefault();

  console.log(userText.value);
  let text = userText.value;
  // if(text.indexOf("\n")!==-1) {
  //   text = text.split("\n");
  //   console.log(text);
  //   for(let line in text) {
  //     fetchFromURL(line);
  //   }
  // }
  // else {
    fetchFromURL(text);
  // }
}

function fetchFromURL(text) {
  fetch(getTranslationURL(text))
    .then((response) => {
      console.log(response);
      response.json()
    })
    .then((json) => {
      bananaText.innerHTML += json.contents.translated;
    })
    .catch((err) => {
      console.log("error occurred " + err)
      alert('Sorry. Some error occurred! Try after sometime.');
    });
}

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}



