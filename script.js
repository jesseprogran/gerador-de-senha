const elInput = document.querySelector("#password");
const upperCaseCheckEl = document.querySelector("#uppercase-check");
const numberCheckEl = document.querySelector("#number-check");
const symbolCheckEl = document.querySelector("#symbol-check");
const securityIndicatorBarEl = document.querySelector("#security-indicator-bar");

let passwordLength = 20;

function generatePassword() {
  let chars = "abcdefghjkmnpqrstuvwxyz";

  const upperCaseChars = "ABCDEFGHJKMNPQRSTUVWXYZ";
  const numberChars = "1234567889";
  const symbolChars = "?!@&*$()[]";

  if (upperCaseCheckEl.checked) {
    chars += upperCaseChars;
  }

  if (numberCheckEl.checked) {
    chars += numberChars;
  }

  if (symbolCheckEl.checked) {
     chars += symbolChars;
  }

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const numberRandom = Math.floor(Math.random() * chars.length);
    password += chars.substring(numberRandom, numberRandom + 1);
  }

  elInput.value = password;
  calculateQuality()

}

function calculateQuality() {
  const percent = Math.round((passwordLength / 64)  * 0.25 + (upperCaseCheckEl.checked ? 15 : 0) + (numberCheckEl.checked ? 25 : 0 ) + (symbolCheckEl.checked ? 55 : 0))

  securityIndicatorBarEl.style.width = `${percent}%`
}

function copy() {
  navigator.clipboard.writeText(elInput.value);
}

const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value;
  document.querySelector("#password-length-text").innerText = passwordLength
  generatePassword();
});

upperCaseCheckEl.addEventListener("click", generatePassword);
numberCheckEl.addEventListener("click", generatePassword);
symbolCheckEl.addEventListener("click", generatePassword);

const copyButtonEl = document.querySelector("#button");
copyButtonEl.addEventListener("click", copy);

generatePassword();
