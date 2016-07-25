var watchId = 0;

$(document).ready(function(){
    $('#startMonitoring').on('click', getLocation);
    $('#stopMonitoring').on('click', endWatch);
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
        watchId = navigator.geolocation.watchPosition(showPosition, showError, options);
    } else {
        showMessage("Geolocation is not supported by this browser.");
    }
}

function endWatch() {
    if(watchId != 0) {
        navigator.geolocation.clearWatch(watchId);
        watchId = 0;
        showMessage("Monitoring ended.");
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
