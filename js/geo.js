$(document).ready(function(){
    getLocation();
});

function supportsGeolocation() {
    return 'geolocation' in navigator;
}

function showMessage(message) {
    $('#message').html(message);
}

function getLocation() {
    if(supportsGeolocation()) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        showMessage("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var datetime = new Date(position.timestamp).toLocaleString();
    showMessage("Latitude: " + position.coords.latitude + "<br/>" + "Longitude: " + position.coords.longitude + "<br/>" + "Timestamp: " + datetime);
}
