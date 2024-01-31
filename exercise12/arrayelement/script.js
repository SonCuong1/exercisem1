let x = 0;
let array = Array()

function addElementToArray() {
    array[x] = document.getElementById("element").value;
    alert("Element array " + array[x] + " added at index " + x);
    x++;
    document.getElementById("element").value = ""
}

function display() {
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br>";
    }
    document.getElementById("result").innerHTML = e;
}