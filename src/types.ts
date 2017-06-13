export interface TypedArray<T> {
  length: number;

  [index: number]: T;

  indexOf(val: T, startIndex: number): number;
  every(callback: (ele: T, index: number) => boolean): boolean;
}
