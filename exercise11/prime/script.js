let numbers = prompt("Nhập số lượng sô nguyên tố cần in ra");
let count = 0;
let N = 2;
console.log(N)
while (count <= numbers) {
    for (let i = 2; i < N; i++) {
        if (N % i === 0) {
            break
        } else {
            console.log(N)
            count ++
        }
    }
    N++
}