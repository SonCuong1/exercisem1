// Bài 1:
// let array = [3,4,6,10,11,34,77,1,8,9];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 10) {
//         console.log(array[i]);
//     }
// }

// Bài 2:
// let array = [3, 4, 6, 10, 11, 34, 77, 1, 8, 9];
// let max = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i]
//     }
// }
// console.log(max);

// Bài 3:
// let array = [3, 4, 6, 10, 11, 34, 77, 1, 8, 9];
// let max = 0;
// let total = 0;
// for (let i = 0; i < array.length; i++) {
//     total += array[i];
//     if (array[i] > max) {
//         max = array[i]
//     }
// }
// console.log(max);
// console.log(total / array.length)

// Bài 4:
// let array = [];
// array = [3, 4, 6, 10, 11, 34, 77, 1, 8, 9];
// array.reverse();
// console.log(array);

// Bài 5:
// let array = [3, -4, 6, -10, 11, -34, 77, 1, 8, 9];
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//         count++
//     }
// }
// console.log(count)

// Bài 6:
// let array = [3, -4, 6, -10, 11, -34, 77, 1, 8, 9];
// let V;
// array.push(V);
// let flag = true;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === V) {
//         flag = false
//     }
// }
// if (flag) {
//     console.log("V is not in the array")
// } else {
//     console.log("V is in the array")
// }

// Bài 7:
// let array = [3, -4, 6, -10, 11, -34, 77, 1, 8, 9];
// let V;
// array.splice(4, 0, "V")
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === "V") {
//         array.splice(array.indexOf("V"), 1)
//     }
// }
// console.log(array)

// Bài 8:
// let array = [3, -4, 6, -10, 11, -34, 77, 1, 8, 9];
// array.sort(function (a, b) {
//     return b - a;
// });
// console.log(array)

// Bài 9:
// let arrayA = [3, -4, 6, -10, 11, -34, 77, 1, 8, 9];
// let arrayB = [5, -2, -7, -10, 23, -78, 47, 0, 8, 9];
// let arrayC = new Array(20);
// arrayC = arrayA.concat(arrayB);
// console.log(arrayC)