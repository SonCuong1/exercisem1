// Bài 1:
// let i = 0;
// for (i; i < 100; i++) {
//     if (i === 99) {
//         alert("Đã hoàn thành")
//     }
// }
// Bài 2:
// let nhietDo = prompt("Hãy nhập nhiệt độ:");
// while (nhietDo > 100) {
//     console.log("Hãy giảm nhiệt độ")
// }
// while (nhietDo < 20) {
//     console.log("Hãy tăng nhiệt độ")
// }
// Bài 3:
// let n1 = 0, n2 = 1, total;
// let i = 1;
// console.log(n1);
// console.log(n2);
// for (i; i <= 20; i++) {
//     total = n1 + n2
//     console.log(total)
//     n1 = n2;
//     n2 = total;
// }
// Bài 4:
// let n1 = 0, n2 = 1, total = n1 + n2;
// while (total % 5 !== 0) {
//     n1 = n2;
//     n2 = total;
//     total = n1 + n2;
// }
// console.log(total)
// Bài 5:
// let n1 = 0, n2 = 1, total = n1 + n2;
// let i = 1;
// for (i; i <= 20; i++) {
//     total = total + n1 + n2
//     n1 = n2;
//     n2 = total;
// }
// console.log(total)
// Bài 6:
// let i = 1, n = 1, total = n;
// while (i <= 30) {
//     if (n % 7 === 0) {
//         total += n
//         n++
//         i++
//     } else {
//         n++
//         i++
//     }
// }
// console.log(total)
// Bài 7:
// let n = 1;
// for (n; n <= 100; n++) {
//     if (n % 3 === 0 && n % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (n % 3 === 0) {
//         console.log("Fizz")
//     } else if (n % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(n)
//     }
//
// }
// Bài 8:
// function play() {
//     let valueButton = document.getElementById("play")
//     let distantA = parseInt(prompt("Hãy nhập min:"));
//     let distantB = parseInt(prompt("Hãy nhập max:"));
//     let count = 0;
//     if (distantA >= distantB) {
//         alert("Min không lớn hơn max")
//         return;
//     }
//     do {
//         let numberA = parseInt(prompt("Hãy nhập 1 số:"));
//         if (distantA > numberA || distantB < numberA) {
//             alert("Yêu cầu nhập trong khoản" + distantA + "-" + distantB)
//
//         } else {
//             let numberB = Math.floor((Math.random() * (distantB - distantA)) + distantA);
//             if (numberA === numberB) {
//                 alert("Chức mừng")
//                 return;
//             } else if (numberA > numberB) {
//                 alert("Lớn hơn rồi")
//                 valueButton.innerHTML = "Chơi lại"
//                 count++
//             } else {
//                 alert("Bé hơn rồi")
//                 valueButton.innerHTML = "Chơi lại"
//                 count++
//             }
//         }
//
//     } while (count < 3)
//     alert("Thua")
// }
