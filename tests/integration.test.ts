import { getBobGreeting } from '../src/algorithm';

function testIntegration() {
  if (typeof getBobGreeting !== 'function') {
    throw new Error('getBobGreeting is not a function');
  }
  console.log('integration.test.ts passed');
}

testIntegration();
