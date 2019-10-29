const sample = require("./sample");
const offline = require("./offline");
const swCaching = require("./sw-caching");
const diskCaching = require("./disk-caching");

(async () => {
    await sample();
    await offline();
    await diskCaching();
    await swCaching();
})();