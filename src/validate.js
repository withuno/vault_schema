const Ajv = require("ajv");
const formats = require("ajv-formats");
const fs = require("fs");

(function() {
  function usage() {
    console.log("usage: validate.js file.json");
  }

  function fromFile(file) {
    return fs.readFileSync(file, "utf8");
  }

  function fromStdin() {
    return fs.readFileSync(0, "utf8");
  }

  // 3 because ["node", "script"]
  if (process.argv.length < 2) {
    usage();
    return;
  }

  // XXX: parameterize this
  const schemaBuf = fs.readFileSync("schemas/7/vault.json");
  const schema = JSON.parse(schemaBuf);

  const ajv = new Ajv();
  formats(ajv);
  const validate = ajv.compile(schema);

  let data;
  if (process.argv.length == 3) {
    data = fromFile(process.argv[2]);
  } else {
    data = fromStdin();
  }

  const valid = validate(JSON.parse(data));

  if (!valid) {
    console.error("VALIDATION FAILED");
    console.error(validate.errors);
    
    return -1;
  }

  console.log("OK");

  return 0;
})();
