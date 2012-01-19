# Fetching Github Repo info with Node.js

A very simple node.js module for fetching information about a Github Repo. This was developed as a helper to a project of mine, and should probably be fixed up and made more robust. 

## Installing
Clone the repo

```bash
cd ~/my/node-project/
git clone git://github.com/mikaelbr/node-repo-github.git
```

You'll now have a folder called ```node-repo-github/``` in your ```node-project/```.
You could rename directory and or move it, if you'd like.

## How to use
Firstly you need to require the module. Given the structure above this would be

```javascript
var githubrepo = require('./node-repo-github/githubrepo.js');
```

## Methods
Now you're ready to use it. As per now, this module only has one method; open. This finds a repo based on user and repo name.

---
### githubrepo.open(username, repo, callback)

#### Parameters
1. username – The username of the repo owner
2. repo     – Full repository name
3. callback – Function to be invoked once there's data

#### Callback
The callback should look like this

```javascript
function (err, data) {

}```

Where ```err``` is the error notice and ```data``` is the Github response. 

#### Example

```javascript

// Require module. Edit path to match your structure
var githubrepo = require("../githubrepo.js");

// Look for repo and set callback to log data found
githubrepo.open("mikaelbr", "node-repo-github", function (err, data) {
	if (err) throw err;

	// Log results
	console.log(data);
});

```