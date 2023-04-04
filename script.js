function generatePassword() {
  const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ1234567889?!@&*$()[]";

  let password = ""

  for (let i = 0; i < 8; i++) {
    const numberRandom = Math.floor(Math.random() * chars.length);
    password += chars.substring(numberRandom, numberRandom + 1);
  }

  const elInput = document.querySelector("#password");
  elInput.value = password

}

generatePassword()