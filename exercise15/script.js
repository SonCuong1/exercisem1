function isPrime(number) {
    number = parseInt(prompt("Enter a number"));
    if (number < 2) {
        alert(`${number} is not a prime`);
        return number;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                alert(`${number} is not a prime`);
                return number;
            }
            alert(`${number} is a prime`);
            return number;
        }
    }
}

isPrime();