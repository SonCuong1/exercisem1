let number = 2;
let count = 0;
while (count < 20) {
    let prime = true;
    for (let numCheck = 2; numCheck < number - 1; numCheck++) {
        if (number % numCheck === 0) {
            prime = false;
            break
        }
    }
    if (prime) {
        console.log(number);
        count++
    }
    number++
}