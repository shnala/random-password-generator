// Assigns variable "generateBtn" to the button in index.html
var generateBtn = document.querySelector("#generate");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
var result = '';


// Write password to the #password input
function generatePassword(passwordLength, inclLowercase, inclUppercase, inclNumbers, inclSpecial) {
  var passwordLength = prompt("Please specify the desired length for your password, between 8-128.")
//Return user input value to confirm functionality
  console.log(passwordLength)
//Prompt for including lowercase letters
  var inclLowercase = confirm("Press 'confirm' if you'd like your password to include lowercase letters.")
    if (inclLowercase === true) {
      for (let i = 0; i < lowercase.length; i++) {
        result += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
      }
    }
    console.log(result);

  var inclUppercase = confirm("Press 'confirm' if you'd like your password to include uppercase letters.")
    if (inclUppercase === true) {
      for (let i = 0; i < uppercase.length; i++) {
        result += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
      }
    } 
    console.log(result);

  var inclNumbers = confirm("Press 'confirm' if you'd like your password to include numbers.")
    if (inclNumbers === true) {
      for (let i = 0; i < numbers.length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
    } 
    console.log(result);

  var inclSpecial = confirm("Press 'confirm' if you'd like your password to include special characters.")
    if (inclSpecial === true) {
      for (let i = 0; i < symbols.length; i++) {
        result += symbols.charAt(Math.floor(Math.random() * symbols.length));
      }
    } 
    console.log(result);
}

console.log(shuffled);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button. This will call the "writePassword" function.
generateBtn.addEventListener("click", writePassword);

// // document.getElementById("generate").addEventListener("click", function(){

//   }

// )



//collect user choice
  //prompt for length (8 to 128 characters)
  //prompt for including lowercase
  //prompt for including uppercase
  //prompt for including numerals
  //prompt for including special characters
//validate at least one choice has been made
//pull from active criteria

