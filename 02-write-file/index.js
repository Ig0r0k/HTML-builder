const { stdout } = process;
const fs = require('fs');
const path = require('path');
const readline = require('readline');

stdout.write('Please input text\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  if (line === 'exit') {
    stdout.write('Good buy!');
    process.exit();
  }
  writeFile(line);
});

function writeFile(txt) {
  fs.appendFile(path.join(__dirname, 'text.txt'), `${txt}\n`, err => {
    if (err) throw err;
  });
}

process.on('exit', () => stdout.write('Good buy!'));