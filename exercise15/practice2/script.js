// Bài 1:
// function multi(number) {
//     alert(number ** 2)
//     return
// }
//
// multi(2)

// Bài 2:
// function acrper(radius) {
//     alert("Acreage: " + radius ** 2 * 3.14 + " Perimerter: " + radius * 2 * 3.14)
//     return
// }
//
// acrper(3)

// Bài 3:
// function factorial(number) {
//     if (number === 1) {
//         return 1
//     }
//     return number * factorial(number - 1)
// }
//
// let result = factorial(5);
// alert(result)

// Bài 4:
// function checkNum() {
//     let text = prompt("Enter a text");
//     if (isNaN(text)) {
//         return false
//     } else {
//         return true
//     }
// }
//
// let result = checkNum();
// alert(result)

// Bài 5:
// function maxNum(num1, num2, num3) {
//     let num = [num1, num2, num3];
//     let max = 0;
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > max) {
//             max = num[i]
//         }
//     }
//     return max
// }
//
// let result = maxNum(3, 234, 77);
// alert(result)

// Bài 6:
// function checkNum(number) {
//     if (number > 0) {
//         return true
//     } else {
//         return false
//     }
// }
//
// let result = checkNum(-3);
// alert(result)

// Bài 7:
// function change(num1, num2) {
//     let fakeNum = num1;
//     num1 = num2;
//     num2 = fakeNum;
//     return alert(num1 + " and " + num2)
// }
//
// change(2, 3)

// Bài 8:
// function group(num1, num2, num3) {
//     let groupTest = [num1, num2, num3];
//     return groupTest.reverse()
// }
//
// let result = group(1, 2, 3);
// alert(result)

// Bài 9:
// function checkGroup(group, text) {
//     let count = 0;
//     for (let i = 0; i < group.length; i++) {
//         if (text === group[i]) {
//             count++
//         }
//     }
//     if (count > 0) {
//         return count
//     } else {
//         return -1
//     }
// }
//
// let result = checkGroup(["h", "e", "l", "l", "o"], "l");
// alert(result)