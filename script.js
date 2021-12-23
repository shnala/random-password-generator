// Assigns variable "generateBtn" to the button in index.html
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button. This will call the "writePassword" function.
generateBtn.addEventListener("click", writePassword);

document.getElementById("generate").addEventListener("click", function(){
  alert("Please specify desired criteria for your password.")

  }
  
)