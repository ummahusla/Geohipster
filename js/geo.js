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
        var options = {
            enableHighAccuracy: true,
            timeout: 3000,
            maximumAge: 20000
        };
        navigator.geolocation.getCurrentPosition(showPosition, showError, options);
    } else {
        showMessage("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var datetime = new Date(position.timestamp).toLocaleString();
    showMessage("Latitude: " + position.coords.latitude + "<br/>" + "Longitude: " + position.coords.longitude + "<br/>" + "Timestamp: " + datetime);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            showMessage("Hipster user denied Geolocation access requests!!1");
            break;
        case error.POSITION_UNAVAILABLE:
            showMessage("Location information unavailable.");
            break;
        case error.TIMEOUIT:
            showMessage("Get hipster location request timed out!!1");
            break;
        case error.UNKNOWN_ERROR:
            showMessage("GRATZ HIPSTER, YOU BROKE IT.");
            break;
    }
}
