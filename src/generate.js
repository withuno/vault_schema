const generator = require('json-schema-to-typescript');

(function() {
  // XXX or env ?
  const CURRENT_SCHEMA = 7;

  console.log("generating schema...");
  generator.compileFromFile("schemas/7/vault.json")
  .then(function(s) {
    console.log(s);
  });
})();
