let products = [123, 456, 789];
let table = "<table>"
for (let i = 0; i < products.length; i++) {
    table += "<tr>"
    table += "<td>";
    table += products[i];
    table += "</td>";
    table += "<td>";
    table += document.getElementById("edit").value;
    table += "</td>";
    table += "<td>";
    table += "delete"
    table += "</td>";
    table += "</tr>"
}
table += "</table>"
document.write(table)