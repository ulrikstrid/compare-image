import { TypedArray } from "../types";
import indexOfSubset from "./indexOfSubset";

function isSubsetOfArray<T>(
  arr: TypedArray<T>,
  subset: TypedArray<T>
): boolean {
  return indexOfSubset(arr, subset) !== -1;
}

export default isSubsetOfArray;
