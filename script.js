const elInput = document.querySelector("#password");
let passwordLength = 20

function generatePassword() {
  const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ1234567889?!@&*$()[]";

  let password = ""

  for (let i = 0; i < passwordLength; i++) {
    const numberRandom = Math.floor(Math.random() * chars.length);
    password += chars.substring(numberRandom, numberRandom + 1);
  }

  elInput.value = password

}

function copy() {
  navigator.clipboard.writeText(elInput.value)
}

const passwordLengthEl = document.querySelector("#password-length");
passwordLengthEl.addEventListener("input", function() {
  passwordLength = passwordLengthEl.value
  generatePassword();
})

const copyButtonEl = document.querySelector("#button");
copyButtonEl.addEventListener("click", copy);

generatePassword() 