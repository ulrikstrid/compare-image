import indexOfSubset from "./utils/indexOfSubset";

function isSubset(imageData: ImageData, subset: ImageData): boolean {
  if (subset.data.length > imageData.data.length) {
    return false;
  }

  const width = subset.width;
  const height = subset.height;

  if (width > imageData.width || height > imageData.height) {
    return false;
  }

  return Array.from(new Array(height), (x, i) => i)
    .map((rowNum: number) => {
      const startIndex = width * 4 * rowNum;
      const endIndex = startIndex + width * 4;

      return subset.data.subarray(startIndex, endIndex);
    })
    .reduce((acc: number[], row: Uint8ClampedArray) => {
      const startIndex = acc.length !== 0 ? acc[acc.length - 1] + width * 4 : 0;
      const index = indexOfSubset(imageData.data, row, startIndex);
      acc.push(index);
      return acc;
    }, [])
    .every((rowStartIndex: number) => rowStartIndex !== -1);
}

export default isSubset;
