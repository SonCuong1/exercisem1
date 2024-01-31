// Bài 1:
// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());

// Bài 2:
// let number = prompt("Enter a number:");
// let string = number.toString();
// let result = [string[0]];
// for (let i = 1; i < string.length; i++) {
//     if (string[i - 1] % 2 === 0 && string[i] % 2 === 0) {
//         result.push("-", string[i]);
//     } else {
//         result.push(string[i]);
//     }
// }
// console.log(result.join(""))

// Bài 3:
// let string = 'The Quick Brown Fox';
// let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let lower = 'abcdefghijklmnopqrstuvwxyz';
// let result = [];
//
// for (let i = 0; i < string.length; i++) {
//     if (UPPER.indexOf(string[i]) !== -1) {
//         result.push(string[i].toLowerCase());
//     } else if (lower.indexOf(string[i]) !== -1) {
//         result.push(string[i].toUpperCase());
//     } else {
//         result.push(string[i]);
//     }
// }
// console.log(result.join(''));