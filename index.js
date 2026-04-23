function squareNumber() {
    const input = document.getElementById("number");
    const resultDiv = document.getElementById("result");

    if (!input || !resultDiv) return;
    const rawValue = input.value.trim();
    const value = Number(rawValue);

    if (rawValue ==="" || Number.isNaN(value)) {
        resultDiv.textContent = "Invalid, please enter a number";
    } else {
        resultDiv.textContent = value * value;
    }

}

document.getElementById("calculate").addEventListener("click",squareNumber);


//should multiply the input with the id number with itself 
// and display the squared value in the div with the id result

//should display 'Invalid, please enter a number' in the div 
// with the id result when the input is not a number.