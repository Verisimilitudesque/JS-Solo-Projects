// characters for password generation
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// variable dom elements for stopring the password
const passwordTxt = document.getElementById("ver-password");
const length = document.getElementById("ver-length");
const passwordNumbers = document.getElementById("ver-numbers");
const passwordSymbols = document.getElementById("ver-symbols");
const generatePsswd = document.getElementById("ver-generate");

// function to listen for password
generatePsswd.addEventListener("click", () => {
  let characters = alpha;
  passwordNumbers.checked ? (characters += numbers) : "";
  passwordSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

// function to generate password
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};
//function to copy password
const copyPassword = () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}