function trans() {
    let eng = ["Hello", "Good bye", "Vietnam", "England"];
    let viet = ["Xin chào", "Tạm biệt", "Việt nam", "Anh"];
    let word = document.getElementById("word").value;
    let result = "";
    let check = -1;
    for (let i = 0; i < eng.length; i++) {
        if (word === eng[i]) {
            check = i;
            for (let j = 0; j < viet.length; j++) {
                if (check === j) {
                    result = viet[j];
                }
            }
        }
    }
    if (check < 0) {
        document.getElementById("wordTrans").innerHTML = "Không tìm thấy từ vựng"
    } else {
        document.getElementById("wordTrans").innerHTML = result
    }
}


