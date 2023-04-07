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
  calculateFontSize()

}

function calculateQuality() {
  const percent = Math.round((passwordLength / 64)  * 0.25 + (upperCaseCheckEl.checked ? 15 : 0) + (numberCheckEl.checked ? 25 : 0 ) + (symbolCheckEl.checked ? 55 : 0))

  securityIndicatorBarEl.style.width = `${percent}%`

  if (percent > 64) {
    securityIndicatorBarEl.classList.remove("critical")
    securityIndicatorBarEl.classList.remove("warning")
    securityIndicatorBarEl.classList.add("safe")
  } else if (percent > 45) {
    securityIndicatorBarEl.classList.remove("critical")
    securityIndicatorBarEl.classList.add("warning")
    securityIndicatorBarEl.classList.remove("safe")
  } else {
    securityIndicatorBarEl.classList.add("critical")
    securityIndicatorBarEl.classList.remove("warning")
    securityIndicatorBarEl.classList.remove("safe")
  }

  if (percent > 100) {
    securityIndicatorBarEl.classList.add("completed");
  } else {
    securityIndicatorBarEl.classList.remove("completed");

  }
}

function calculateFontSize() {
  if (passwordLength > 45) {
    elInput.classList.remove("font-sm");
    elInput.classList.remove("font-xs");
    elInput.classList.add("font-xxs");
  } else if (passwordLength > 32) {
    elInput.classList.remove("font-sm");
    elInput.classList.add("font-xs");
    elInput.classList.remove("font-xxs");
  } else if (passwordLength > 22) {
    elInput.classList.add("font-sm");
    elInput.classList.remove("font-xs");
    elInput.classList.remove("font-xxs");
  } else {
    elInput.classList.remove("font-ms");
    elInput.classList.remove("font-xs");
    elInput.classList.remove("font-xxs");
  }
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
