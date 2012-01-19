
// Require module. Edit path to match your structure
var githubrepo = require("../githubrepo.js");

// Look for repo and set callback to log data found
githubrepo.open("mikaelbr", "node-repo-github", function (err, data) {
	if (err) throw err;

	// Log results
	console.log(data);
})