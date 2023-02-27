const fs = require('fs');

function base64_encode(file) {
  var bitmap = fs.readFileSync(file);
  return new Buffer.from(bitmap).toString('base64');
}

process.argv.slice(2).forEach((file) => {
  console.log(`data:image/jpeg;base64,${base64_encode(file)}`);
});
