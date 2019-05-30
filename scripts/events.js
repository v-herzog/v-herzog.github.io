markers = [];

// Send message to the parent window
var sendMessage = function (msg) {
    console.log(JSON.stringify(msg));
    window.parent.postMessage(JSON.stringify(msg), '*');
};

// Events for the markers detected in the screen
AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;
        marker.addEventListener('markerFound', function() {
            markers.push(parseInt(marker.id));
            sendMessage(markers);
        });
        marker.addEventListener('markerLost', function() {
            markers = markers.filter(item => item !== parseInt(marker.id))
            sendMessage(markers);
        });
    }
});