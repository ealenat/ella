 /*
Program Name: js
Name: Ealena Telson.
Date Created: 11/27/2024 
Date Last Created: 11/02/72024
Version: 4.0
Description: Homework 4 JS
*/

//dynamic date js code//
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code//
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value; 

slider.oninput = function() {
    output.innerHTML = this.value;
}
//first name valdate js code
function validateFname(){
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //Checks to see if first name field is empty
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty.";
        return false;
    } else if (fname != ""){
        if (! fname.match(namePattern)) { //checks if first name matches pattern
        document.getElementById("fname-error").innerHTML = "Letter, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) { //checks the number of charcaters in fname, has to be min of 1
        document.getElementById("fname-error").innerHTML = "First name cannot be less than two characters.";
        return false;
    }else if (fname.length > 30) { //checks the max # of charcaters for f name
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 charcaters.";
        return false;
    } else { //everything is correct
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//middle initial valdate js code
function validateMname(){
   let  mname = document.getElementById("mname").value;
    const namePattern = /^[A-Z]$/;

    //Convert middle initial to uppercase if it is lowercase
    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;

    //Checks to see if mname is one character
     if (!mname.match(namePattern)) { //checks if middle initial matches pattern
        document.getElementById("mname-error").innerHTML = "Middle initial must be a single uppercase letter";
        return false;
    } else { //everything is correct
        document.getElementById("mname-error").innerHTML = "";
        return true;
    }
}

//Last name valdate js code
function validateLname(){
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //Checks to see if last name field is empty
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty.";
        return false;
    } else if (lname != ""){
        if (! lname.match(namePattern)) { //checks if last name matches pattern
        document.getElementById("lname-error").innerHTML = "Letter, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) { //checks the number of charcaters in lname, has to be min of 1
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than two characters.";
        return false;
    }else if (lname.length > 30) { //checks the max # of charcaters for l name
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 charcaters.";
        return false;
    } else { //everything is correct
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}


//dob validation js code
function validateDob() {
    dob=document.getElementById("dob")
    let date =  new Date(dob.value);
    let maxDate = new Date().getFullYear(new Date()-120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future."
        document.value="";
        return false;
    } else if(date < new Date(maxDate)){
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be more than 120 years ago."
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML= "";
        return true;
    }
}
//ssn validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    //regular expression for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML= 
        "Please enter a valid Social Security Number.";
        return false;

    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
//address 1 validation
function validateAddress1(){
    var address1 = document.getElementById("address1").value;
    console.log(address1);
    console.log(address1.length);

    if (address1.length < 2) {
        document.getElementById("address1-error").innerHTML = 
        "Please enter something on address line"; 
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

//city validation js code
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank.";
        return false;
    } else {
            document.getElementById("city-error").innerHTML = "";
        return true;
        }
    }

//Zip code validadtion js code
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "") // removes any non-number values and non dash charcaters

    if (!zip) {
        document.getElementById("zip-error").innerHTML = 
        "Zip code cannot be left blank.";
        return false;
    }
    if (zip.length > 5) {
        zip = zip.slice (0,5); //removes all numbers after the first 5

    }
    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

//email validation
function validateEmail() {
    email =  document.getElementById("email").value;
    var emailR = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/; //pattern for email

    if (email =="") {
        document.getElementById("email-error").innerHTML = 
        "Email cannot be empty."
        return false;

    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = 
            "Please enter a valid email address."
            return false;

    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

//phonenumber validation
function validatePhonenum() {
    const phoneInput = document.getElementById("phonenum");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes all non numbers)

        if (phone.length == 0) {
            document.getElementById("phonenum-error").innerHTML = 
            "Phone number cannot be left blank.";
            return false;
        }
        const formattedPhone = phone.slice(0,3) + "-" + phone.slice (3,6) + "-" + phone.slice(6,10)
        phoneInput.value = formattedPhone;
        document.getElementById("phonenum-error").innerHTML = "";
        return true;
}
//username validtion javascript code
function validateUname() {
    uname = document.getElementById("uname").value

    //convert username into lowercase
    uname = uname.toLowerCase();

    //display username in lowercase
    document.getElementById("uname").value = uname;

    if (uname.length == 0) {
        document.getElementById("uname-error").innerHTML = 
        "Username field cannot be empty.";
        return false;
    }
    // checks that username does not start with a number
    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error"). innerHTML = 
    "Username cannot begin with a number.";
    return false;
    }

    //checks that username consists of only letters, number, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML =
        "Username can only contain letters, numbers, or underscores.";
        return false;
    } else if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = 
        "Username has to be atleast 5 characters.";
        return false; 
    }else if (uname.length > 30) { ////checks for username. make sures it doesn't have more than 30 charcater
        document.getElementById("uname-error").innerHTML = 
        "Username cannot exceed 30 characters.";
        return false; 
    } else { //if everything is good to go and username is valid
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }

}

//password validation js code
function validatePassword() {
    const password = document.getElementById("password").value;
    const uname = document.getElementById("uname").value;

    //sets up and initializes array
    const errorMessage = []

    //check for lowercase letters
    if (!password.match(/[a-z]/)){
        errorMessage.push("Enter at least one lowercase letter.");
    }
     //check for uppercase letters
     if (!password.match(/[A-Z]/)){
        errorMessage.push("Enter at least one uppercase letter.");
    }
     //check for numbers 
     if (!password.match(/[0-9]/)){
        errorMessage.push("Enter at least one number.");
    }
     //check for special charcaters
     if (!password.match(/[!\@#\$%&*\-_\\.+\(\)]/)){
        errorMessage.push("Enter at least one special character.");
    }
    //check that username is not password
    if (password ==  uname || password.includes (uname)) {
        errorMessage.push("Enter cannot contain username.");
    }
    //display error massages if there are any error
    const errorContainer = document.querySelector(".password-message");
    errorContainer.innerHTML = errorMessage
    .map((message)=>  `<span>${message}</span><br/>`)
    .join("");
}

//confirm password validation js
function confirmPassword() {
    password1 = document.getElementById("password").value;
    password2 = document.getElementById("con_password").value;
    submitBtn = document.getElementById("submit");

    if (password1 != password2) {
        document.getElementById("password2-error").innerHTML = 
        "Passwords do not match.";
        submitBtn.disabled = true;
        return false;
    } else {
            document.getElementById("password2-error").innerHTML = 
            "";
            submitBtn.disabled = false;
            return true;
        } 
}

//review data button. redisplay all user input back to the user
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'style='text-align: center;'>Your Information:</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr> <td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class = 'outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                    case "radio":
                        if (formcontent.elements[i].checked) {
                            formoutput += "<tr> <td align = 'right'>" + formcontent.elements[i].name + "</td>";
                            formoutput = formoutput + " <td class= 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                        }
                        break;
                    case "button":
                    case "submit":
                    case "reset":
                        break;
                        default:
                            formoutput = formoutput + "<tr><Td align = 'right'>" + formcontent.elements[i].name + "</td>";
                            formoutput = formoutput + "<td class= 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML =  formoutput;
    }
}

//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//shows alert box when necessary js code
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function () {
        alertBox.style.display = "none";
    }
}

// validate everything on the form
function validateEverything() {
    let valid = true;

    document.getElementById("alert-box").style.display = "none";
    if (!validateFname()) {
        valid = false;
    }
    if (!validateMname()) {
        valid = false;
    }if (!validateLname()) {
        valid = false;
    }if (!validateDob()) {
        valid = false;
    }if (!validateSsn()) {
        valid = false;
    }if (!validateAddress1()) {
        valid = false;
    }if (!validateCity()) {
        valid = false;
    }if (!validateZip()) {
        valid = false;
    }if (!validateEmail()) {
        valid = false;
    }if (!validatePhonenum()) {
        valid = false;
    }if (!validateUname()) {
        valid = false;
    }
    if (!validatePassword()) {
        valid = false;
    }
    if (!confirmPassword()) {
        valid = false;
    }
    if (valid) {

        document.getElementById("submit").disabled = false;
       
    } else {
        showAlert();
        return true;
}
}



//cookie for remembering all the information that is on the form//
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays*24*60*60*1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";

}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
    }
    }
    return "";
}

var inputs = [
    {id: "fname", cookieName: "firstName"},
    {id: "mname", cookieName: "middleInitial"},
    {id: "lname", cookieName: "lastName"},
    {id: "dob", cookieName: "dob"},
   
    {id: "address1", cookieName: "address1"},
    {id: "city", cookieName: "city"},
    {id: "zip", cookieName: "zipCode"},
    {id: "email", cookieName: "email"},
    {id: "phonenum", cookieName: "phone"},
    {id: "uname", cookieName: "userName"},
]


inputs.forEach(function(input) {
    var inputElement = document.getElementById(input.id);

    //prefill any input fields that have been saved with the cookie//
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !=="") {
        inputElement.value = cookieValue;
    }

    //set a cookie with the input value when the input field changes//
    inputElement.addEventListener("input", function() {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

//greet the user wth their name and messages if cookie is set
var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "! </b><br>";
    document.getElementById("welcome2").innerHTML = 
    "<a href='#' id='new-user'>Not " +
     firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function() {
        inputs.forEach(function(input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}

