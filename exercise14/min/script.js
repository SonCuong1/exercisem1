function minNum(array) {
    if (array.length === 0) {
        return -1;
    }
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array [i] < min) {
            min = array[i];
        }
    }
    return min;
}

let arrayA = [3, 5, 7, 5, 4, 12];
let min = minNum(arrayA);
alert(min)