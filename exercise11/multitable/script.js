sout = sout + "</table>";
document.write(sout);

let data = "<table>"
for (let i = 1; i < 10; i++) {
    data += "<tr>"
    for (let j = 2; j < 10; j++) {
        data += "<td>"
        data += `${j}x ${i} = ${i * j}`
        data += "</td>"
    }
    data += "</tr>"
}
data += "</table>"
document.write(data)