// Assigns variable "generateBtn" to the button in index.html. Defining character strings for user input to draw from.
var generateBtn = document.querySelector("#generate");
// const lowercase = "abcdefghijklmnopqrstuvwxyz";
// const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*_-+=";
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]
var desiredInputs = []
var result = '';


// Write password to the #password input
function generatePassword(passwordLength, inclLowercase, inclUppercase, inclNumbers, inclSpecial) {

//Prompts for desired criteria
  var passwordLength = prompt("Please specify the desired length for your password, between 8-128.")

  var inclLowercase = confirm("Press 'confirm' if you'd like your password to include lowercase letters.")

  var inclUppercase = confirm("Press 'confirm' if you'd like your password to include uppercase letters.")

  var inclNumbers = confirm("Press 'confirm' if you'd like your password to include numbers.")

  var inclSpecial = confirm("Press 'confirm' if you'd like your password to include special characters.")  

//Concatenating desired criteria into one array  
    if (inclLowercase === true) {
      var newArray = desiredInputs.concat(lowercase);
      // for (let i = 0; i < lowercase.length; i++) {
      //   result += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
      // }
    }
    console.log(newArray)

    if (inclUppercase === true) {
      newArray.concat(uppercase);
      // for (let i = 0; i < uppercase.length; i++) {
      //   result += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
      // }
    } 
    console.log(newArray)

    if (inclNumbers === true) {
      newArray.concat(numbers);
      // for (let i = 0; i < numbers.length; i++) {
      //   result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      // }
    } 

    if (inclSpecial === true) {
      newArray.concat(symbols);
      // for (let i = 0; i < symbols.length; i++) {
      //   result += symbols.charAt(Math.floor(Math.random() * symbols.length));
      // }
    } 

    console.log(newArray);
  // return result;


  //TODO: Applying the Fisher-Yates shuffle method to the array containing user's desired inputs.
  function shuffle(desiredInputs) {
    let currentIndex = desiredInputs.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [desiredInputs[currentIndex], desiredInputs[randomIndex]] = [
        desiredInputs[randomIndex], desiredInputs[currentIndex]];
    }
  
    return array;
  }
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

