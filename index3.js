var requireFromUrl = require('require-from-url/sync');
var script3 = requireFromUrl('https://raw.githubusercontent.com/kkodani/hello-world/master/script3.js');

var scripts = {
  script3: script3
}

module.exports = scripts;
