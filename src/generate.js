//XXX: this is not ready yet. Chris
const generator = require('json-schema-to-typescript');

const fs = require('fs');

(function() {
  // XXX or env ?
  const CURRENT_SCHEMA = 7;

  console.log("generating schema...");
  generator.compileFromFile("schemas/7/vault.json")
  .then(function(s) {
    fs.writeFileSync('vault.d.ts', s);
  });
})();
