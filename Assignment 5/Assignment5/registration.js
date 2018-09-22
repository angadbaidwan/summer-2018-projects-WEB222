//Main function called when the user tries to submit the form
function validateForm() {
    clearErrors();
    var result = true;
    result = validateUsername();
    result = validatePassword() && result;
    result = comparePassword() && result;
    result = validateStreetName() && result;
    result = validateCity() && result;
    return result;
}
function validateUsername() {
    var _result = true;
    var elem = document.signup.username.value.trim();
    //Checking if username starts with a letter
    var elem2 = elem.toUpperCase();
    if (elem2.charAt(0) < "A" || elem2.charAt(0) > "Z") {
        displayError("<p>Username must start with a letter.</p>");
        _result = false;
    }
    //Checking if username is at least 6 characters long
    if (elem.length < 6) {
        displayError("<p>Username must be at least 6 characters long.</p>");
        _result = false;
    }
    return _result;
}
function validatePassword() {
    var _result = true;
    var elem = document.signup.password.value.trim();
    //Checking if password has at least 1 uppercase character
    var alphaTest = false;
    var alphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var i = 0; i < elem.length; i++) {
        if (alphaString.indexOf(elem.substr(i,1))>=0) {
            alphaTest = true;
        }
    }
    if (!alphaTest) {
        displayError("<p>Password must contain at least 1 uppercase character.</p>");
        _result = false;
    }
    //Checking if password has at least 1 digit
    var numTest = false;
    var numString = "0123456789";
    for(var i = 0; i < elem.length; i++) {
        if (numString.indexOf(elem.substr(i,1))>=0) {
            numTest = true;
        }
    }
    if (!numTest) {
        displayError("<p>Password must contain at least 1 digit.</p>");
        _result = false;
    }
    //Checking if password is at least 8 characters long
    if (elem.length < 8) {
        displayError("<p>Password must be at least 8 characters long.</p>");
        _result = false;
    }
    return _result;
}
//Checking if password fields match
function comparePassword() {
    if (document.signup.password.value.trim() == document.signup.confirmPass.value.trim()) {
        return true;
    }
    else {
        displayError("<p>Both password fields must match.</p>");
        return false;
    }
}
//Checking if Street Name does not contain any digits
function validateStreetName() {
    var _result = true;
    var elem = document.signup.streetName.value.trim();
    var numTest = false;
    var numString = "0123456789";
    for(var i = 0; i < elem.length; i++) {
        if (numString.indexOf(elem.substr(i,1))>=0) {
            numTest = true;
        }
    }
    if (numTest) {
        displayError("<p>Street Name must not contain any digits.</p>");
        _result = false;
    }
    return _result;
}
function validateCity() {
    var _result = true;
    var elem = document.signup.city.value.trim();
    //Checking if City contains only letters
    var elem = elem.toUpperCase();
    var allAlpha = true;
    for(var i = 0; i < elem.length; i++) {
        if (elem.charAt(i) < "A" || elem.charAt(i) > "Z") {
            allAlpha = false;
        }
    }
    if (!allAlpha) {
        displayError("<p>City must contain letters only.</p>");
        _result = false;
    }
    return _result;
}
function displayError(output) {
    document.getElementById('errors').innerHTML += output;
}
function clearErrors() {
    document.getElementById('errors').innerHTML="";
}