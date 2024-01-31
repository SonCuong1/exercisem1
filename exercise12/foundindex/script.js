let number = +prompt("Enter a number");
let array = [1, 2, 3, 4, 5];
let flag = -1;
for (let numCheck = 0; numCheck < array.length; numCheck++) {
    if (number === array[numCheck]) {
        flag = numCheck
    }
}
if (flag > -1) {
    document.write("Value " + number + " found at " + flag)
} else {
    document.write("Value not found")
}