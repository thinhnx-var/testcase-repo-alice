const { getBobGreeting } = require('../src/algorithm');

function testIntegration() {
  if (typeof getBobGreeting !== 'function') {
    throw new Error('getBobGreeting is not a function');
  }
  console.log('integration.test.js passed');
}

testIntegration();
