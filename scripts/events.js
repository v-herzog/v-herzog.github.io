markers = [];

// Send message to the parent window
var sendMessage = function (msg) {
    console.log(msg.toString());
    window.parent.postMessage(msg.toString(), '*');
};

// Events for the markers detected in the screen
AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;
        marker.addEventListener('markerFound', function() {
            markers.push(marker.id);
            //sendMessage(markers);
            console.log('markerFound');
        });
        marker.addEventListener('markerLost', function() {
            markers = markers.filter(item => item !== marker.id)
            //sendMessage(markers);
            console.log('markerLost');
        });
    }
});