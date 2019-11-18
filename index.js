const sample = require("./scripts/sample");
const offline = require("./scripts/offline");
const swCaching = require("./scripts/sw-caching");
const diskCaching = require("./scripts/disk-caching");
const swRegistration = require("./scripts/sw-registration");

(async () => {
    await sample();
    await swRegistration();
    await offline();
    await diskCaching();
    await swCaching();
})();