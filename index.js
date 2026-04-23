function squareNumber() {
    const input = document.getElementById("number");
    const resultDiv = document.getElementById("result");

    if (!input || !resultDiv) return;

    const value = Number(input.value);

    if rawValue ==="" || Number.isNaN(Number(rawValue)) {
        resultDiv.textContent = "Invalid, please enter a number";
    } else {
        resultDiv.textContent = value * value;
    }
}


//should multiply the input with the id number with itself 
// and display the squared value in the div with the id result

//should display 'Invalid, please enter a number' in the div 
// with the id result when the input is not a number.