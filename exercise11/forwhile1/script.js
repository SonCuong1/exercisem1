// Bài 1:
// let number = 0;
// for (number; number < 100; number++) {
//     if (number === 99) {
//         alert("Đã hoàn thành")
//     }
// }

// Bài 2:
// let temp = prompt("Hãy nhập nhiệt độ:");
// while (temp > 100) {
//     console.log("Hãy giảm nhiệt độ")
// }
// while (temp < 20) {
//     console.log("Hãy tăng nhiệt độ")
// }

// Bài 3:
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

// Bài 4:
// let numberA = 0, numberB = 1, total = numberA + numberB;
// while (total % 5 !== 0) {
//     numberA = numberB;
//     numberB = total;
//     total = numberA + numberB;
// }
// console.log(total)

// Bài 5:
// let numberA = 0, numberB = 1, total = numberA + numberB;
// let i = 1;
// for (i; i <= 20; i++) {
//     total = total + numberA + numberB
//     numberA = numberB;
//     numberB = total;
// }
// console.log(total)

// Bài 6:
let count = 0, number = 0, total = 0;
while (count < 30) {
    if (number % 7 === 0) {
        total += number
        count++
    }
    number++
}
console.log(total)
// console.log(total)

// Bài 7:
// let number = 1;
// for (number; number <= 100; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (number % 3 === 0) {
//         console.log("Fizz")
//     } else if (number % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(number)
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
