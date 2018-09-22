// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function () {
    listFruits();
    listFiles();
}

function listFruits() {
    var fruit = document.getElementById("fruitsList");
    var olist = document.createElement("ol");
    for (var i = 0; i < fruits.length; i++) {
        var item = document.createElement("li");
        item.textContent = fruits[i];
        olist.appendChild(item);
    }
    fruit.appendChild(olist);
};

function listFiles() {
    var file = document.querySelector("#filesList");
    var ulist = document.createElement("ul");
    for (var i = 0; i < directory.length; i++) {
        var item = document.createElement("li");
        item.textContent = directory[i].name;
        if (directory[i].type == "directory") {
            var ulist2 = document.createElement("ul");
            for (var j = 0; j < directory[i].files.length; j++) {
                var subItem = document.createElement("li");
                subItem.textContent = directory[i].files[j].name;
                ulist2.appendChild(subItem);
            }
            item.appendChild(ulist2);
        }
        ulist.appendChild(item);
    }
    file.appendChild(ulist);
};