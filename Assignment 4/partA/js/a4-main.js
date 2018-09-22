var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = loadTableWithFilters;

function loadTableWithFilters() {
    var tbody = document.getElementById("main-table-body");
    tbody.innerHTML = "";
    for(var i = 0; i < petData.length; i++) {
        if (petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax 
            && (filterType == "" || filterType == petData[i].type)) {
            var trow = document.createElement("tr");
            
            var td1 = document.createElement("td");
            var img = document.createElement("img");
            img.setAttribute("src", petData[i].image.src);
            img.setAttribute("alt", petData[i].image.alt);
            img.setAttribute("height", petData[i].image.height);
            img.setAttribute("width", petData[i].image.width);
            td1.appendChild(img);
            trow.appendChild(td1);

            var td2 = document.createElement("td");
            var name = document.createElement("h4");
            var t = document.createTextNode(petData[i].name);
            name.appendChild(t);
            td2.appendChild(name);
            var desc = document.createElement("p");
            desc.innerHTML = petData[i].description;
            td2.appendChild(desc);
            var age = document.createElement("span");
            var t1 = document.createTextNode("Age: ");
            age.appendChild(t1);
            var t2 = document.createTextNode(petData[i].age);
            age.appendChild(t2);
            var t3 = document.createTextNode(" years old.");
            age.appendChild(t3);
            td2.appendChild(age);
            trow.appendChild(td2);

            tbody.appendChild(trow);
        }
    }
}
function filterDog() {
    filterType = "dog";
    loadTableWithFilters();
}
function filterCat() {
    filterType = "cat";
    loadTableWithFilters();
}
function filterBird() {
    filterType = "bird";
    loadTableWithFilters();
}
function filter_zero_1() {
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}
function filter_1_3() {
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}
function filter_4_plus() {
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
function filterAllPets() {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}