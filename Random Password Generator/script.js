// characters for password generation
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// variable dom elements for stopring the password
const passwordTxt = document.getElementById("ver-password");
const passwordLngth = document.getElementById("ver-length");
const passwordNmbrs = document.getElementById("ver-numbers");
const passwordSymbols = document.getElementById("ver-symbols");
const generatePsswd = document.getElementById("ver-generate");