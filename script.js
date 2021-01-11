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
  
  if (length <8 || length >128){
  
    alert("You did not choose a valid number ");
    
  }
  else {
    let userInputLower = confirm ("do you want to have lowercase?");
    
    if (userInputLower) {
     userInput = userInput.concat(lowerCase)
    }
    let userInputUpper = confirm("do you want to have uppercase?");
    
    if (userInputUpper){
      userInputUpper = userInputUpper.concat(upperCase)
    }
    let userInputSpecialChar = confirm("do you want special characters?");

  if (userInputSpecialChar) { userInputSpecialChar = userInputSpecialChar.concat(specialChar)
  
  }
  let num = userinputNum = confirm("do you want numbers?");
  
  if (userinputNum) { userinputNum =userinputNum.concat(num)
  
  }
  
} 

}



//   if( charType.toLowerCase === "lowercase" ) {
//     charSet = "abcdefghijklmnopqrstuvwxyz";
//   } else if( charType.toLowerCase === "uppercase" ) {
//     charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   } else if( charType.toLowerCase === "numeric" ) {
//     charSet = "0123456789";
//   } else if( charType.toLowerCase === "special" ) {
//     charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// }


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
