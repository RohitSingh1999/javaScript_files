const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question, callback) {
  rl.question(question, (answer) => {
    callback(answer);
  });
}

// Usage example
prompt('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});




