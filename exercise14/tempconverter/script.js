function tempConv(value) {
    value = parseInt(value);
    document.getElementById("result").innerHTML = ((value - 32) / 1.8).toFixed(2);
}