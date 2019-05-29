markers = [];

// Events for the communication with the parent window
var sendMessage = function (msg) {
    window.parent.postMessage(msg, '*');
};
bindEvent(window, 'message', function (e) {
    console.log(e.data);
});

// Events for the markers detected in the screen
AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;
        marker.addEventListener('markerFound', function() {
            markers.push(marker.id);
            console.log(markers);
            sendMessage('hello from iframe');
        });
        marker.addEventListener('markerLost', function() {
            markers = markers.filter(item => item !== marker.id)
            console.log(markers);
            sendMessage('hello from iframe');
        });
    }
});