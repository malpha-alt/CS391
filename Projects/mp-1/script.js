function output(result) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = "Result: " + result;
    
    if (result < 0) {
        outputElement.style.color = "#ff4444";
    } else {
        outputElement.style.color = "whitesmoke";
    }
}

function addition() {
    let num1 = Number(document.getElementById("first").value);
    let num2 = Number(document.getElementById("second").value);
    let result = num1 + num2;
    output(result);
}

function subtraction() {
    let num1 = Number(document.getElementById("first").value);
    let num2 = Number(document.getElementById("second").value);
    let result = num1 - num2;
    output(result);
}

function multiplication() {
    let num1 = Number(document.getElementById("first").value);
    let num2 = Number(document.getElementById("second").value);
    let result = num1 * num2;
    output(result);
}

function division() {
    let num1 = Number(document.getElementById("first").value);
    let num2 = Number(document.getElementById("second").value);
    let result = num1 / num2;
    output(result);
}

function power() {
    let num1 = Number(document.getElementById("first").value);
    let num2 = Number(document.getElementById("second").value);

    result = 1;

    for (let i = 0; i < num2; i++) {
        result *= num1;
    }

    output(result);
}

function clearCalc() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    output("");
}