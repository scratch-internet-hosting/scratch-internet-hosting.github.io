(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.fetchHTML = function(url, callback) {
        fetch(url, {mode: 'cors'})
            .then(response => response.text())
            .then(html => callback(html))
            .catch(error => callback('Error: ' + error));
    };

    var descriptor = {
        blocks: [
            ['R', 'fetch HTML from %s', 'fetchHTML', 'https://example.com']
        ]
    };

    ScratchExtensions.register('HTML Fetcher', descriptor, ext);
})({});
