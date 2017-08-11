chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'outerBounds': {
            'width': 400,
            'height': 500
        }
    });
});

chrome.sockets.tcp.create(properties, function(createInfo) {
    var nka_socketId = createInfo.socketId;

});


chrome.runtime.onSuspend.addListener(function() {
    // Do some simple clean-up tasks.
});

chrome.runtime.onSuspend.addListener(function() {
    // Do some simple clean-up tasks.
});