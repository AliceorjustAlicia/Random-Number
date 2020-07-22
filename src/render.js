const randomBtn = document.getElementById('randomBtn');
const numberTag = document.getElementById('numberTag');
const promptLbl = document.getElementById('promptLbl');

var fromTxt = document.getElementById('fromTxt');
var toTxt = document.getElementById('toTxt');

randomBtn.onclick = GenerateRandom;


async function GenerateRandom(min,max) {

    if (fromTxt.value == "" || toTxt.value == "") {
        promptLbl.style.visibility = "visible"
        promptLbl.style.marginTop = "30px"
        numberTag.style.visibility = "hidden" // in case that numbertag is already visible
      } else {
        min = Math.ceil(fromTxt.value); 
        max = Math.floor(toTxt.value); 
        numberTag.innerText =  Math.floor(Math.random() * (max - min + 1)) + min;
        numberTag.style.visibility = "visible";
        promptLbl.style.visibility = "hidden" // in case that promptLbl is already visible
        promptLbl.style.marginTop = "0px"
      }

}