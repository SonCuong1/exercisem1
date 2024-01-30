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
// let tr = 1;
// let word = "*"
// for (tr; tr <= 5; tr++) {
//     document.write(word + "<br>")
//     word += "*"
// }

// let line = 1
// let word = "*****"
// for (line; line <= 5; line++) {
//     document.write(word + "<br>")
//     word -= "*"
// }

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
