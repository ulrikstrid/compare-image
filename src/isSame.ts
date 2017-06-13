function isSame(a: ImageData, b: ImageData): boolean {
  return a.data.every((value: number, index: number) => value === b.data[index])
}

export default isSame
