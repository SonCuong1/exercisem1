function processConfirm(answer) {
    let result = "";
    if (answer) {
        result = "OK. We'll play";
    } else {
        result = "Nah. Not this time";
    }
    return result;
}

let confirmAnser = confirm("Shall we play?");
let theAnswer = processConfirm(confirmAnser);
alert(theAnswer);

// function processConfirm(answer) {
//     let result = "";
//     if (answer) {
//         result = "Excellent. We'll play a nice game of chess.";
//     } else {
//         result = "Maybe later then.";
//     }
//     return result;
// }
//
// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(confirmAnswer);
// alert(theAnswer);