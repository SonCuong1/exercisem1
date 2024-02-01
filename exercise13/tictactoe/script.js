let b = document.getElementById("tic");

let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = ["(.)", "(.)", "(.)", "(.)", "(.)"];
}

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
b.innerHTML = data;

function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
}

b.innerHTML = data