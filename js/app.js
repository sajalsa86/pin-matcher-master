//otp
function getPin() {
    const pin = generateOtp();
    const pinString = pin + '';
    if (pinString.length === 6) {
        return pin;
    } else {
        return getPin();
    }
};

function generateOtp() {
    const random = Math.round(Math.random() * 1000000);
    return random;
};


document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const generateField = document.getElementById('generate-field');
    generateField.value = pin;
});

//calculator
document.getElementById('calculator').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const displayField = document.getElementById('calc-display-field');
    const previousDisplayNumber = displayField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            displayField.value = '';
        }
        else if (number === '<') {
            const digits = previousDisplayNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            displayField.value = remainingDigits;
        }
    }
    else {
        const newDisplayNumber = previousDisplayNumber + number;
        displayField.value = newDisplayNumber;
    }

});