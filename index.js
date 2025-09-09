const palindromeBtn = document.getElementById("covertText");
const palindromeField = document.getElementById("palindromeField");
const outputPalindrome = document.getElementById("outputPalindrome");
const err = document.getElementById("error");
const foo = (palindrome) => {
  const palindromeConverted = palindrome.split("").reverse().join("");
  return palindromeConverted;
};

const functionCoverted = () => {
  const palinVal = palindromeField.value.trim();
  if (!palinVal) {
    err.innerText = "field are required!";
    palindromeField.style.border = "1px solid red";
  } else {
    outputPalindrome.innerText = foo(palinVal);
    palindromeField.value = "";
    err.innerText = "";
    palindromeField.style.border = "1px solid gray";
  }
};
palindromeBtn.addEventListener("click", functionCoverted);
