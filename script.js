// Assigns variable "generateBtn" to the button in index.html. Defining character strings for user input to draw from.
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]
var desiredInputs = []
var result = '';


// Write password to the #password input
function generatePassword() {

//Prompts for desired criteria
  var passwordLength = prompt("Please specify the desired length for your password, between 8-128.")

    if (passwordLength < 8) {
      alert("Value must be between 8 and 128.")
      return;

    } else if (passwordLength > 128) {
      alert("Value must be between 8 and 128.")
      return;
    }

  var inclLowercase = confirm("Press 'OK' if you'd like your password to include lowercase letters.")

  var inclUppercase = confirm("Press 'OK' if you'd like your password to include uppercase letters.")

  var inclNumbers = confirm("Press 'OK' if you'd like your password to include numbers.")

  var inclSpecial = confirm("Press 'OK' if you'd like your password to include special characters.")  

//Concatenating desired criteria into one array  

    if (inclLowercase === true) {
      desiredInputs = desiredInputs.concat(lowercase);
      //legacy code for self-reference
      // for (let i = 0; i < lowercase.length; i++) {
      //   result += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
      // }
    }

    if (inclUppercase === true) {
      desiredInputs = desiredInputs.concat(uppercase);
      
    } 

    if (inclNumbers === true) {
      desiredInputs = desiredInputs.concat(numbers);
      
    } 

    if (inclSpecial === true) {
      desiredInputs = desiredInputs.concat(symbols);
      
    } 

    if (!inclLowercase && !inclUppercase && !inclNumbers && !inclSpecial) {
      alert("At least one criteria must be selected.")
    }

  //Declare pw array
  var shuffledArray = []

  //write loop for pw length, thanks Brett
for (let i = 0; i < passwordLength; i++) {
  //generate
    var randomIndex = Math.floor(Math.random() * desiredInputs.length);
    //using random index to select randomly form desiredInputs array
    var shuffledChar = desiredInputs[randomIndex];
    shuffledArray.push(shuffledChar);
}

//Push that into a pw array
//Convert array into string
  var pwOutput = shuffledArray.join('');

return pwOutput;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button. This will call the "writePassword" function.
generateBtn.addEventListener("click", writePassword);
