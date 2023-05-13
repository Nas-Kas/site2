const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('should return type of array', () => {
    const result = shuffle([1,2,3]);
    expect(Array.isArray(result)).toBe(true)
  });

  test('should return an array with the same elements as the original', () => {
    const arr = [1,2,3,4,5];
    const res = shuffle(arr);
    arr.forEach((e) => expect(res).toContain(e));
  });

  test('should return an array not equivalent to original array', () => {
    const arr = [1,2,3,4,5];
    const res = shuffle(arr);
    expect(res).not.toEqual(arr);
  });
});
