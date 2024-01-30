// Bài 1:
// function f() {
//     let c = parseInt(document.getElementById("c").value)
//     let f = c * (9 / 5) + 32
//     document.getElementById("f").innerHTML = f + " độ F"
// }

// Bài 2:
// function ft() {
//     let m = parseInt(document.getElementById("m").value)
//     let ft = m * 3.2808
//     document.getElementById("ft").innerHTML = ft.toFixed(2) + "ft"
// }

// Bài 3:
// function squ() {
//     let a = parseInt(document.getElementById("a").value)
//     let squ = a * a
//     document.getElementById("squ").innerHTML = "Diện tích hình vuông: " + squ + "m<sup>2</sup>"
// }

// Bài 4:
// function squ2() {
//     let a2 = parseInt(document.getElementById("a2").value)
//     let b2 = parseInt(document.getElementById("b2").value)
//     let squ2 = a2 * b2
//     document.getElementById("squ2").innerHTML = "Diện tích hình chữ nhật: " + squ2 + "m<sup>2</sup>"
// }

// Bài 5:
// function squ3() {
//     let a3 = parseInt(document.getElementById("a3").value)
//     let b3 = parseInt(document.getElementById("b3").value)
//     let squ3 = (a3 * b3) / 2
//     document.getElementById("squ3").innerHTML = "Diện tích tam giác vuông: " + squ3 + "m<sup>2</sup>"
// }

// Bài 6:
// function equ1() {
//     let a4 = parseInt(document.getElementById("a4").value)
//     let b4 = parseInt(document.getElementById("b4").value)
//     if (a4 === 0 && b4 !== 0) {
//         document.getElementById("equ1").innerHTML = "Phương trình vô nghiệm"
//     } else if (a4 === 0 && b4 === 0) {
//         document.getElementById("equ1").innerHTML = "Phương trình vô số nghiệm"
//     } else {
//         let x = -b4 / a4
//         document.getElementById("equ1").innerHTML = "x = " + x
//     }
// }

// Bài 7:
// function equ2() {
//     let a5 = parseInt(document.getElementById("a5").value)
//     let b5 = parseInt(document.getElementById("b5").value)
//     let c5 = parseInt(document.getElementById("c5").value)
//     let del = b5 ** 2 - 4 * a5 * c5
//     if (del < 0) {
//         document.getElementById("equ2").innerHTML = "Phương trình vô nghiệm"
//     } else if (del === 0) {
//         let x2 = -(b5 / (2 * a5))
//         document.getElementById("equ2").innerHTML = "Phương trình có nghiệm kép x<sub>1</sub> = x<sub>2</sub> = " + x2
//     } else {
//         let x3 = (-b5 + Math.sqrt(del)) / (2 * a5)
//         let x4 = (-b5 - Math.sqrt(del)) / (2 * a5)
//         document.getElementById("equ2").innerHTML = "Phương trình có 2 nghiệm x<sub>1</sub> = " + x3 + " và x<sub>2</sub> = " + x4
//     }
// }

// Bài 8:
// function age() {
//     let age = parseInt(document.getElementById("age").value)
//     if (age > 0) {
//         if (age < 120) {
//             document.getElementById("age2").innerHTML = "Đây là tuổi của 1 người"
//         } else {
//             document.getElementById("age2").innerHTML = "Đây không phải tuổi của một người"
//         }
//     } else {
//         document.getElementById("age2").innerHTML = "Đây không phải tuổi của một người"
//     }
// }

// Bài 9:
// function tri() {
//     let a6 = parseInt(document.getElementById("a6").value)
//     let b6 = parseInt(document.getElementById("b6").value)
//     let c6 = parseInt(document.getElementById("c6").value)
//     if (a6 > 0 && b6 > 0 && c6 > 0 && a6 + b6 > c6 && b6 + c6 > a6 && a6 + c6 > b6) {
//         document.getElementById("tri").innerHTML = "Đây là 1 tam giác"
//     } else {
//         document.getElementById("tri").innerHTML = "Đây không phải là 1 tam giác"
//     }
// }

// Bài 10:
// function bil() {
//     let ele = parseInt(document.getElementById("ele").value)
//     let bil = ele * 500
//     document.getElementById("bil").innerHTML = "Tiền điện: " + bil + "VND"
// }

// Bài 11:
// function fee() {
//     let sal = parseInt(document.getElementById("sal").value)
//     if (sal < 7000000) {
//         document.getElementById("fee").innerHTML = "Không cần đóng thuế"
//     } else if (sal < 15000000) {
//         let fee = sal * 0.1
//         document.getElementById("fee").innerHTML = "Thuế thu nhập cá nhân: " + fee + "VND"
//     } else {
//         let fee = sal * 0.2
//         document.getElementById("fee").innerHTML = "Thuế thu nhập cá nhân: " + fee + "VND"
//     }
// }

// Bài 12:
// function i() {
//     let mon = parseInt(document.getElementById("mon").value)
//     let mont = parseInt(document.getElementById("mont").value)
//     let i = parseInt(document.getElementById("i").value)
//     let i2 = (mon * (1 + i / 100) ** mont) - mon
//     document.getElementById("i2").innerHTML = "Tổng lãi phải trả: " + i2 + "VND"
// }