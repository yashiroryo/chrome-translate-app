var input = document.getElementById("translate-text");
var btn = document.getElementById("do-translate-btn");
var resultText = document.getElementById("result-part");
var baseUrl =
  "https://script.google.com/macros/s/AKfycbyfX5aN0qZHiTD26nlF6CWEx-5Zn6R9QyAHZDXyhPGSc75ZSM_h2Lj8sznK95fNj1EJKw/exec";
var url = "";
var translateText = "";
// default
// TODO en と ja を変更できるように修正
var source = "en";
var target = "ja";

btn.onclick = function updateInput() {
  translateText = input.value;
  if (translateText == "") {
    resultText.innerText = "is not inputed text";
    return;
  }
  url =
    baseUrl +
    "?text=" +
    translateText +
    "&source=" +
    source +
    "&target=" +
    target;
  fetch(url, {
    mode: "cors",
    method: "GET",
  }).then((data) => {
    data.json().then((data1) => {
      console.log(data1.text);
      resultText.innerText = data1.text;
    });
  });
};
