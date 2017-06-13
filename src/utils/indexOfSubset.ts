import { TypedArray } from "../types";

function isSubsetOfArray<T>(
  arr: TypedArray<T>,
  subset: TypedArray<T>,
  start?: number
): number {
  // by definition a subset can not be longer than arr
  if (arr.length < subset.length) {
    return -1;
  }

  let startIndex = start || -1;

  while (startIndex + subset.length <= arr.length) {
    startIndex = arr.indexOf(subset[0], startIndex + 1);

    // could not find the first element of subarray in the array
    if (startIndex === -1) {
      return startIndex;
    }

    const everyMatch = subset.every((ele: T, index: number): boolean => {
      return ele === arr[startIndex + index];
    });

    if (everyMatch) {
      return startIndex;
    }
  }

  return startIndex;
}

export default isSubsetOfArray;
