
    //add code here
    function squareNumber() {
    const input = document.getElementById("number");
    const resultDiv = document.getElementById("result");

    // If either element doesn't exist, stop (prevents null errors)
    if (!input || !resultDiv) return;

    const value = Number(input.value);

    if (isNaN(value)) {
        resultDiv.textContent = "Invalid, please enter a number";
    } else {
        resultDiv.textContent = value * value;
    }
}

    
}

//should multiply the input with the id number with itself 
// and display the squared value in the div with the id result

//should display 'Invalid, please enter a number' in the div 
// with the id result when the input is not a number.