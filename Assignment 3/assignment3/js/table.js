// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

window.onload = function() {
    var user = document.getElementById("uInfo");
    var table = document.createElement("table");
    var headRow = document.createElement("tr");
    headRow.appendChild(gen_th("First Name"));
    headRow.appendChild(gen_th("Last Name"));
    headRow.appendChild(gen_th("Age"));
    headRow.appendChild(gen_th("Email"));
    table.appendChild(headRow);
    for (var i = 0; i < users.length; i++) {
        var row = document.createElement("tr");
        row.appendChild(gen_td(users[i].first_name));
        row.appendChild(gen_td(users[i].last_name));
        row.appendChild(gen_td(users[i].age));
        row.appendChild(gen_td_email(users[i].email));
        table.appendChild(row);
    }
    table.setAttribute("border", "1");
    user.appendChild(table);
};

function gen_th(text) {
    var cell = document.createElement("th");
    cell.textContent = text;
    return cell;
};

function gen_td(text) {
    var cell = document.createElement("td");
    cell.textContent = text;
    return cell;
};

function gen_td_email(text) {
    var cell = document.createElement("td");
    cell.innerHTML = "<a href=\"mailto:" + text + "\">" + text + "</a>";
    return cell;
};