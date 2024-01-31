// Bài 1:
// let numberA = 0, numberB = 1, total;
// let i = 1;
// console.log(numberA);
// console.log(numberB);
// for (i; i <= 20; i++) {
//     total = numberA + numberB
//     console.log(total)
//     numberA = numberB;
//     numberB = total;
// }

// Bài 2:
// let numberA = prompt("Hãy nhập 1 số:");
// let numberB = 1;
// let i;
// for (i; i <= numberA; i++) {
//     numberB *= i
// }
// console.log(numberB)

// Bài 3:
// 3.1.
// let data = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         data += "*"
//     }
//     data += "<br>"
// }
// document.write(data)
// 3.2.
// let data = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j > i; j--) {
//         data += "*"
//     }
//     data += "<br>"
// }
// document.write(data)
// 3.3.
// let data = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j > i; j--) {
//         data += "&ensp;"
//     }
//     for (let k = 1; k <= i; k++) {
//         data += "*"
//     }
//     data += "<br>"
// }
// document.write(data)
// 3.4.
// let data = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j < i; j++) {
//         data += "&ensp;"
//     }
//     for (let k = 5; k > i; k--) {
//         data += "*"
//     }
//     data += "<br>"
// }
// document.write(data)
// Bài 4:
// for (let line = 0; line <5; line++) {
//     for (let width = 0; width < 10; width++) {
//         if (line === 0 || line === 4) {
//             document.write("*")
//         } else if (width === 0 || width === 9) {
//             document.write("*")
//         } else {
//             document.write("&ensp;")
//         }
//     }
//     document.write("<br>")
// }

// Bài 5:
// function result() {
//     let money = parseInt(document.getElementById("money").value);
//     let month = parseInt(document.getElementById("month").value);
//     let interRate = parseInt(document.getElementById("interRate").value);
//     for (let i = 1; i <= month; i++) {
//         money = money * ((1 + interRate) ** 2)
//     }
//     console.log(money)
// }

// Bài 6:
// let word = "*"
// for (let line = 0; line < 10; line++) {
//     if (line === 1) {
//         for (let width = 10; width < 10; width++) {
//             if (3 <= word <= 4 || 6 <= word <= 7) {
//                 document.write(word += "*")
//             }
//         }
//     }
// }