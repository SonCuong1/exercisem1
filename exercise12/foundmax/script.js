let array = [2, 4, 5, 1, 2];
let max = array[0];
let numCheck = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
        numCheck = i
    }
}
document.write("Max is " + max + " at position " + numCheck)