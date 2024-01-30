let number = 2;
for (let count = 0; count < 20; number++) {
    let prime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(number);
        count++;
    }
}
