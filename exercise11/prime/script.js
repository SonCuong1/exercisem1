let count = 0;
let number = 2;
for (count; count < 20;) {
    for (let i = 2; i < number;) {
        if (number % i === 0) {
            i++;
        } else {
            count++;
            number++
        }
    }
}

