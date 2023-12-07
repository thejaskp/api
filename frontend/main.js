var xhr = null;

getXmlHttpRequestObject = function () {
    if (!xhr) {
        // Create a new XMLHttpRequest object 
        xhr = new XMLHttpRequest();
    }
    return xhr;
};

function dataCallback() {
    // Check if the response is ready
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("User data received!");
        getDate();
        dataDiv = document.getElementById('result-container');
        // Set current data text
        dataDiv.innerHTML = xhr.responseText;
    }
}

function sendDataCallback() {
    // Check if the response is ready
    if (xhr.readyState == 4 && xhr.status == 201) {
        console.log("Data creation response received!");
        getDate();
        dataDiv = document.getElementById('sent-data-container');
        // Set current data text
        dataDiv.innerHTML = xhr.responseText;
    }
}

// function sendData() {
//     dataToSend = document.getElementById('data-input').value;
//     if (!dataToSend) {
//         console.log("Data is empty.");
//         return;
//     }
//     console.log("Sending data: " + dataToSend);
//     xhr = getXmlHttpRequestObject();
//     xhr.onreadystatechange = sendDataCallback;
//     // asynchronous requests
//     xhr.open("POST", "http://localhost:6969/users", true);
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     // Send the request over the network
//     xhr.send(JSON.stringify({ "data": dataToSend }));
// }

function sendData() {
    // Get the user input from the 'data-input' element
    var dataToSend = document.getElementById('data-input').value;

    if (!dataToSend) {
        console.log("Data is empty.");
        return;
    }

    console.log("Sending data: " + dataToSend);

    // Create XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Set up the callback function for when the response is received
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 201) {
                console.log("Data creation response received!");
                getDate();
                var dataDiv = document.getElementById('sent-data-container');
                // Set current data text
                dataDiv.innerHTML = xhr.responseText;
            } else {
                console.error("Error in sending data. Status: " + xhr.status);
            }
        }
    };

    // Configure and send the request
    xhr.open("POST", "http://localhost:6969/users", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ "prompt": dataToSend }));
}


function getUsers() {
    console.log("Get users...");
    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = dataCallback;
    // asynchronous requests
    xhr.open("GET", "http://localhost:6969/users", true);
    // Send the request over the network
    xhr.send(null);
}

function getDate() {
    date = new Date().toString();

    document.getElementById('time-container').textContent = date;
}
function sendDataAndFetchUsers() {
    // Call sendData() and getUsers() together
    sendData();
    getUsers();
}

(function () {
    getDate();
})();
