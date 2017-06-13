import isSubset from "./isSubset";

test("same image is subset", () => {
  const a = new ImageData(10, 10);
  a.data.fill(255);

  expect(isSubset(a, a)).toBe(true);
});

test("larger image is not a subset", () => {
  const a = new ImageData(10, 10);
  const b = new ImageData(20, 20);
  const c = new ImageData(5, 20);
  const d = new ImageData(20, 5);

  expect(isSubset(a, b)).toBe(false);
  expect(isSubset(a, c)).toBe(false);
  expect(isSubset(a, d)).toBe(false);
});

test("a real subset should be a subset", () => {
  const fullArr = new Uint8ClampedArray(10 * 10 * 4);
  fullArr.fill(0);
  fullArr.set([128, 128, 128, 128], 10 * 4);
  fullArr.set([128, 128, 128, 128], 10 * 4 * 2);
  fullArr.set([128, 128, 128, 128], 10 * 4 * 3);
  fullArr.set([128, 128, 128, 128], 10 * 4 * 4);

  const subsetArr = new Uint8ClampedArray(1 * 4 * 4);
  subsetArr.fill(255);
  subsetArr.set([128, 128, 128, 128], 0);
  subsetArr.set([128, 128, 128, 128], 4);
  subsetArr.set([128, 128, 128, 128], 8);
  subsetArr.set([128, 128, 128, 128], 12);

  const a = new ImageData(fullArr, 10, 10);
  const b = new ImageData(subsetArr, 1, 4);

  expect(isSubset(a, b)).toBe(true);
});

test("a fake subset should not be a subset", () => {
  const fullArr = new Uint8ClampedArray(4 * 4 * 4);
  fullArr.fill(0);
  fullArr.set([128, 128, 128, 128], 0);
  fullArr.set([128, 128, 128, 128], 4 * 4 * 2);
  fullArr.set([128, 128, 128, 128], 4 * 4 * 3);

  const subsetArr = new Uint8ClampedArray(1 * 4 * 4);
  subsetArr.fill(255);
  subsetArr.set([128, 128, 128, 128], 0);
  subsetArr.set([128, 128, 128, 128], 4);
  subsetArr.set([128, 128, 128, 128], 8);
  subsetArr.set([128, 128, 128, 128], 12);

  const a = new ImageData(fullArr, 4, 4);
  const b = new ImageData(subsetArr, 1, 4);

  expect(isSubset(a, b)).toBe(false);
});
