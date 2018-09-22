// Name: Angadpreet Baidwan
// Student Number: 135421170
// Date: August 6, 2018

// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload = function() {
	makeRequest(1);
}

function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
	if (pageNum === 1) var url = "https://reqres.in/api/users?page=1";
	else if (pageNum === 2) var url = "https://reqres.in/api/users?page=2";
	else if (pageNum === 3) var url = "https://reqres.in/api/users?page=3";
	else if (pageNum === 4) var url = "https://reqres.in/api/users?page=4";
	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var tbody = document.getElementById("data");
			tbody.innerHTML = "";
			for (var i = 0; i < jsData.per_page; i++) {
				var trow = document.createElement("tr");
				var data1 = document.createElement("td");
				var id = document.createTextNode(jsData.data[i].id);
				data1.appendChild(id);
				trow.appendChild(data1);
				var data2 = document.createElement("td");
				var fname = document.createTextNode(jsData.data[i].first_name);
				data2.appendChild(fname);
				trow.appendChild(data2);
				var data3 = document.createElement("td");
				var lname = document.createTextNode(jsData.data[i].last_name);
				data3.appendChild(lname);
				trow.appendChild(data3);
				var data4 = document.createElement("td");
				var image = document.createElement("img");
				image.setAttribute("src", jsData.data[i].avatar);
				data4.appendChild(image);
				trow.appendChild(data4);
				tbody.appendChild(trow);
			}
		} else {
			console.log('There was a problem with the request.');
		}
	}
}	