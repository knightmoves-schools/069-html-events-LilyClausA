function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');

    let num = parseFloat(value);
    if (isNaN(num)) {
        result.innerHTML = 'Invalid, please enter a number';
    } else {
        result.innerHTML = num * num;
    }
    
}

document.getElementById('calculate').addEventListener('click', calculateSquare);

//should multiply the input with the id number with itself 
// and display the squared value in the div with the id result

//should display 'Invalid, please enter a number' in the div 
// with the id result when the input is not a number.
