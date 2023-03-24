// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(e){
    var passLenght;
    var char = "";
    var password = "";

    // While loop for character lenght parameters passLenght >= 8 and <= 128
    while(true) {
    passLenght = prompt("Choose a password lenght between 8 and 128 character", "");
    if (!passLenght) {
        alert("No password will be generated");
        return;
    }
    if (passLenght >= 8 && passLenght <= 128) {
        break;
    }
    alert("Password lenght must be at least 8 characters and no more than 128 characters");
    }
    alert("Your password will be " + passLenght + " characters");
    // --------------------------------------------------------------------------------------------------------

    // Characters selection
    // LowerCase 
    lowerCase = confirm("Do you want lowercases on your password?");
    if(!lowerCase) {
        lowerCase = false;
        alert("Your password won't contain lowercases");
    } else {
        lower = "abcdefghijklmnopqrstuvwxyz"
        lowerCase = true;
        alert("Your password will contain lowercases");
        var char = char.concat(lower);
    }
    console.log(char);
    // --------------------------------------------------------------

    // UpperCase 
    upperCase = confirm("Do you want uppercases on your password?");
    if(!upperCase) {
        upperCase = false; 
        alert("Your password won't contain uppercases");
    } else {
        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        upperCase = true;
        alert("Your password will contain uppercases");
        var char = char.concat(upper);
    }
    console.log(char);
    // --------------------------------------------------------------

    // Numeric
    numericCharacters = confirm("Do you want numeric characters on your password?");
    if(!numericCharacters) {
        numericCharacters = false;
        alert("Your password won't contain numeric characters"); 
    } else {
        numeric = "0123456789"
        numericCharacters = true;
        alert("Your password will contain numeric characters");
        var char = char.concat(numeric);
    }
    console.log(char);
    // --------------------------------------------------------------

    // Special Characters
    specialCharacters = confirm("Do you want special characters on your password?");
    if(!specialCharacters) {
        specialCharacters = false;
        alert("Your password won't contain special characters");
    } else {
        special = "!@#$%^&*()"
        specialCharacters = true;
        alert("Your password will contain special characters");
        var char = char.concat(special);
    }
    console.log(char);
    // ---------------------------------------------------------------

    // If the char var is empty no password will be generated
    if (char === "") {
        window.alert("No characters were selected, you must at least select one");
        return;
    }
    // ----------------------------------------------------------------

    // Generate random password with the char var 
    for (var i = 0; i <= passLenght; i++) {
        var randomNumber = Math.floor(Math.random()*char.length);
        password += char.substring(randomNumber, randomNumber +1); 
        console.log(password);
    }
    // ----------------------------------------------------------------

    // Add password to placeholder
    document.getElementById("password").value = password;
    // ----------------------------------------------------------------
})
