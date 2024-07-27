const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function strip(word) {
  return word.replace(/[^a-zA-Z0-9]/g, "");
}

function reverse(word) {
  return word.split("").reverse().join("");
}

function calculateResult () {
  const forwardWord = strip(textInput.value.toLowerCase());
  const backwardWord = reverse(forwardWord);
  
  if (forwardWord == backwardWord) {
    result.innerText = `${textInput.value} is a Palindrome`
  } else {
    result.innerText = `${textInput.value} is not a Palindrome`
  }
  result.classList.remove("hidden")
}

checkBtn.addEventListener('click', () => {textInput.value.length > 0  ? calculateResult() : alert("Please input a value")});