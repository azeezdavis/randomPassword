// arrays that hold char types

let generateBtn = document.querySelector("#generate");
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let specialChar =["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "|", "[", "]", ";", "<", ">", "?", "/"];
let num = ["1","2","3","4","5","6","7","8","9","0"];
let userInput = [ ]
// ask why this doesnt run
// let caseSense = lowerCase.split(" ");

function generatePassword () {
  let length = prompt ("Choose a password with characters bewteen 8 and 128");
 
  let charSet = "";
  
  if (length <8 || length >128) {
  
    alert("You did not choose a valid number");
    
  }
  else {
    let userInputLower = confirm ("do you want to have lowercase?");
    
    if (userInputLower) {
     userInput = userInput.concat(lowerCase)
    }
    let userInputUpper= confirm ("do you want to have uppercase?");
    
    if (userInputUpper){
      userInput = userInput.concat(upperCase)
    }
    let userInputSpecialChar = confirm("do you want special characters?");

  if (userInputSpecialChar) { userInput = userInput.concat(specialChar)
  
  }
  let userinputNum = confirm("do you want numbers?");
  
  if (userinputNum) { userInput = userInput.concat(num)
  
   console.log(userInput)
  }
   
  } 
for (i = 0; i < length; i++){
  let count = Math.floor(Math.random() * userInput.length);
  charSet += userInput[count] + "";
  console.log(charSet)
  }
  return charSet;
}



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
