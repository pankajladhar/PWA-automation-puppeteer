const sample = require("./sample");
const offline = require("./offline");
const swCaching = require("./sw-caching");
const diskCaching = require("./disk-caching");
const swRegistration = require("./sw-registration");

(async () => {
    await sample();
    await swRegistration();
    await offline();
    await diskCaching();
    await swCaching();
})();