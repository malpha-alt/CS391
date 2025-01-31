function checkAge() {
    const ageInput = document.getElementById('age-input').value;
    const age = Number(ageInput);
    let errorMessage = "";

    if (isNaN(age)) {
        errorMessage = "Please enter a valid number.";
    } else if (age % 1 !== 0) {
        errorMessage = "Please enter an integer.";
    } else if (age < 1) {
        errorMessage = "Enter a positive number.";
    } else if (age < 18) {
        errorMessage = "You must be over 18.";
    } else if (age > 120) {
        errorMessage = "You must be under 120.";
    }
    
    if (errorMessage === ""){
        document.getElementById("main-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        document.getElementById("error-messaege").innerHTML = errorMessage;
        document.getElementById("error-content").style.visibility = "visible";
        document.getElementById("main-content").style.visibility = "hidden";
    }
}