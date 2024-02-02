let board = [];
let data = "";
let turn = 1;
for (let i = 0; i < 5; i++) {
    board[i] = ["(.)", "(.)", "(.)", "(.)", "(.)"];
}
for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&ensp;" + "&ensp;" + "&ensp;";
    }
}
document.getElementById("tic").innerHTML = data;

function changeValue() {
    data = "";
    let positionX = parseInt(prompt("X: "));
    let positionY = parseInt(prompt("Y: "));
    if (turn % 2 === 0) {
        board[positionX][positionY] = "x";
    } else {
        board[positionX][positionY] = "o";
    }
    turn++;
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&ensp;" + "&ensp;" + "&ensp;";
        }
    }
    document.getElementById("tic").innerHTML = data;
}