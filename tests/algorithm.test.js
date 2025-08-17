const { getBobGreeting } = require('../src/algorithm');

function testGetBobGreeting() {
  const result = getBobGreeting();
  if (result !== 'Hello, its Bob') {
    throw new Error(`Expected 'Hello, its Bob', got '${result}'`);
  }
  console.log('algorithm.test.js passed');
}

testGetBobGreeting();
