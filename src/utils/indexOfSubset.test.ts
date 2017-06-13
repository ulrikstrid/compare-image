import indexOfSubset from "./indexOfSubset";

const arr = new Uint8ClampedArray([1, 2, 3, 4, 5]);

test("same array is a subset", () => {
  expect(indexOfSubset(arr, arr)).toBe(0);
});

test("subset can not be longer", () => {
  const subset = new Uint8ClampedArray(6);
  subset.set([6], 5);

  expect(indexOfSubset(arr, subset)).toBe(-1);
});

test("subset is a subset", () => {
  const subset1 = arr.slice(0, 3);
  const subset2 = arr.slice(1, 4);

  expect(indexOfSubset(arr, subset1)).toBe(0);
  expect(indexOfSubset(arr, subset2)).toBe(1);
});

test("not a subset is not a subset", () => {
  const notSubset = new Uint8ClampedArray([0, 0, 3]);

  expect(indexOfSubset(arr, notSubset)).toBe(-1);
});

test("will try further down if it did not work out", () => {
  const longArr = new Uint8ClampedArray([1, 2, 3, 4, 5, 1, 2, 5, 5]);
  const subset = new Uint8ClampedArray([1, 2, 5]);

  expect(indexOfSubset(longArr, subset)).toBe(5);
});
