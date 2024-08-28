function convert() {
    const decimal = parseInt(document.getElementById('decimal').value);
    if (!isNaN(decimal)) {
        const binary = decimal.toString(2);
        const hexadecimal = decimal.toString(16).toUpperCase();
        document.getElementById('binary-result').textContent = binary;
        document.getElementById('hexadecimal-result').textContent = `0x${hexadecimal}`;
    } else {
        document.getElementById('binary-result').textContent = 'Invalid input';
        document.getElementById('hexadecimal-result').textContent = 'Invalid input';
    }
}
