const addition = require('../src/pages/addition.js');
const subtract = require('../src/pages/subtract.js');
const multiply = require('../src/pages/multiply.js');

test('addition two numbers', () => {
    expect(addition(3,3)).toBe(6);
});

test('subtract two numbers', () => {
    expect(subtract(3,3)).toBe(0);
});

test('multiply two numbers', () => {
    expect(multiply(3,3)).toBe(9);
});