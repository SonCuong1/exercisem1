let sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
let i = 2;
let j = 1;
while (j <= 10) {
    sout = sout + "<tr>";
    while (i <= 10) {
        sout = sout + "<td>" + i + "x" + j + "=" + i * j + "</td>";
        i++;
    }
    sout = sout + "</tr>";
    i = 2;
    j++
}
sout = sout + "</table>";
document.write(sout);