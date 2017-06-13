import isSubsetOfArray from "./isSubsetOfArray";

const arr = new Uint8ClampedArray([1, 2, 3, 4, 5]);

test("same array is a subset", () => {
  expect(isSubsetOfArray(arr, arr)).toBe(true);
});

test("subset can not be longer", () => {
  const subset = new Uint8ClampedArray(6);
  subset.set([6], 5);

  expect(isSubsetOfArray(arr, subset)).toBe(false);
});

test("subset is a subset", () => {
  const subset1 = arr.slice(0, 3);
  const subset2 = arr.slice(1, 4);

  expect(isSubsetOfArray(arr, subset1)).toBe(true);
  expect(isSubsetOfArray(arr, subset2)).toBe(true);
});

test("not a subset is not a subset", () => {
  const notSubset = new Uint8ClampedArray([0, 0, 3]);

  expect(isSubsetOfArray(arr, notSubset)).toBe(false);
});

test("will try further down if it did not work out", () => {
  const longArr = new Uint8ClampedArray([1, 2, 3, 4, 5, 1, 2, 5, 5]);
  const subset = new Uint8ClampedArray([1, 2, 5]);

  expect(isSubsetOfArray(longArr, subset)).toBe(true);
});
