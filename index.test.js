const sum = require('./index');

describe('Sum function', () => {
  test('Sum of 4 and 6 return 10', () => {
    expect(sum(4, 6)).toEqual(10);
  });
});
