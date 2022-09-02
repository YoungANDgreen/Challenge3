// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var upper = window.prompt("Include upper case? (yes or no)")
//  Ensures values are input.
    if (!upper) {
        return; 
    }
    var number = window.prompt("Include numbers? (yes or no)")
    if (!number) {
        return; 
    }
    var special = window.prompt("Include special characters? (yes or no)")
    if (!special) {
        return; 
    }
    var length = window.prompt("8 to 128")
    if (!length) {
        return; 
    }
    if (  (upper === "yes" && number === "yes" && special === "yes")) 
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"

     else if (
        (upper === "yes" && number === "yes" && special === "no") ) 
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

     else if (
        (upper === "yes" && number === "no" && special === "no") ) 
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

     else if (
        (upper === "no" && number === "no" && special === "no")) 
        charset = "abcdefghijklmnopqrstuvwxyz";    

    else if (
        (upper === "yes" && number === "no" && special === "yes")) 
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    
    else if (
        (upper === "no" && number === "no" && special === "yes")) 
        charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";            

    else if (
        (upper === "no" && number === "yes" && special === "yes")) 
        charset = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"; 
        
        
        retVal = "";
         
    for (var i = 0, n = charset.length; i < length; ++i) 
        retVal += charset.charAt(Math.floor(Math.random() * n))
return retVal;
}

 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
