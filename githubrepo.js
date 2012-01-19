var https = require('https');

/**
 * Internal method for creating response callbacks, should not be used on
 * its own
 */
var makeResponse = function(callback) {
    var chunks = '';

    return function(response) {

        response.setEncoding('utf8');

        response.on('data', function(chunk) {
            chunks += chunk;
        });

        response.on('end', function() {
            var json = JSON.parse( chunks ),
                err = typeof json.code !== 'undefined' ?
                    'Invalid web service call: '+json.description :
                    null;

            callback(err, json);
        });
    };
}

module.exports = {
    /**
     * Get spesific Github Repo information based on username and repo name
     *
     * @param {String} Username of the repo owner
     * @param {String} Repo name to lookup
     * @param {Function} The callback that'll be invoked once there's data
     */
    open: function(username, repo, callback) {
        var query = '/repos/' + username + '/' + repo;
        this.get(query, callback);
    },

    /**
     * Send a request to the Github API
     *
     * @param {String} The path for this query, see http://developer.spotify.com/en/metadata-api/overview/
     * @param {Function} The callback that'll be invoked once there's data
     */
    get: function(query, callback) {
        var opts = {
            host: "api.github.com",
            path: query,
            method: "GET"
        },
        request = https.request(opts, makeResponse( callback ));
        request.end();
    }
};
