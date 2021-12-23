// Assigns variable "generateBtn" to the button in index.html. Defining character strings for user input to draw from.
var generateBtn = document.querySelector("#generate");
// const lowercase = "abcdefghijklmnopqrstuvwxyz";
// const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*_-+=";
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]
var desiredInputs = []
var result = '';


// Write password to the #password input
function generatePassword(passwordLength, inclLowercase, inclUppercase, inclNumbers, inclSpecial) {

//Prompts for desired criteria
//TODO: specify length to be b/t 8 and 128 (if statement after prompt; call again if incorrect)
  var passwordLength = prompt("Please specify the desired length for your password, between 8-128.")

  var inclLowercase = confirm("Press 'OK' if you'd like your password to include lowercase letters.")

  var inclUppercase = confirm("Press 'OK' if you'd like your password to include uppercase letters.")

  var inclNumbers = confirm("Press 'OK' if you'd like your password to include numbers.")

  var inclSpecial = confirm("Press 'OK' if you'd like your password to include special characters.")  

//Concatenating desired criteria into one array  
    if (inclLowercase === true) {
      desiredInputs = desiredInputs.concat(lowercase);
      // for (let i = 0; i < lowercase.length; i++) {
      //   result += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
      // }
    }
    console.log(desiredInputs)

    if (inclUppercase === true) {
      desiredInputs = desiredInputs.concat(uppercase);
      // for (let i = 0; i < uppercase.length; i++) {
      //   result += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
      // }
    } 
    console.log(desiredInputs)

    if (inclNumbers === true) {
      desiredInputs = desiredInputs.concat(numbers);
      // for (let i = 0; i < numbers.length; i++) {
      //   result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      // }
    } 

    if (inclSpecial === true) {
      desiredInputs = desiredInputs.concat(symbols);
      // for (let i = 0; i < symbols.length; i++) {
      //   result += symbols.charAt(Math.floor(Math.random() * symbols.length));
      // }
    } 

    console.log(desiredInputs);
  // return result;

  //declare pw array
  var shuffledArray = []

  //write loop for pw length
for (let i = 0; i < passwordLength; i++) {
  //generate
    var randomIndex = Math.floor(Math.random() * desiredInputs.length);
    //using random index to select randomly form desiredInputs array
    var shuffledChar = desiredInputs[randomIndex];
    shuffledArray.push(shuffledChar);
}

  var pwOutput = shuffledArray.join('');

return pwOutput;

//declare pw array
//write loop that runs for pw length
//each iteration generate a random index;
//use that random index to select an item from the desiredInputs array
//push that into into a pw array
//convert array to string
//return pw string


}


//TODO: create array from user's desired inputs
//TODO: shuffle that array
//TODO: slice that array to the length specified by the user


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

