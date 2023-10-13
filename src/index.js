module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const hundredsDigit = Math.floor(number / 100);
    const tensDigit = Math.floor((number % 100) / 10);
    const onesDigit = number % 10;

    let result = '';


    if (hundredsDigit > 0) {
        result += ones[hundredsDigit] + ' hundred';
    }

    if (tensDigit === 1) {
        result += (result.length > 0 ? ' ' : '') + teens[onesDigit];
    } else {
        if (tensDigit > 0) {
            result += (result.length > 0 ? ' ' : '') + tens[tensDigit];
        }
        if (onesDigit > 0) {
            result += (result.length > 0 ? ' ' : '') + ones[onesDigit];
        }
    }

    return result;
}
    
    
    

