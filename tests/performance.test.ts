const { getBobGreeting } = require('../src/algorithm');

function testPerformance() {
  const start = Date.now();
  for (let i = 0; i < 100000; i++) {
    getBobGreeting();
  }
  const duration = Date.now() - start;
  console.log(`Performance test completed in ${duration}ms`);
}

import { getBobGreeting } from '../src/algorithm';

function testPerformance() {
  const start = Date.now();
  for (let i = 0; i < 100000; i++) {
    getBobGreeting();
  }
  const duration = Date.now() - start;
  console.log(`Performance test completed in ${duration}ms`);
}

testPerformance();
