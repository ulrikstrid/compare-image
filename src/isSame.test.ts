import isSame from './isSame'

test('same dimensions empty', () => {
  const a = new ImageData(10, 10)
  const b = new ImageData(10, 10)

  expect(isSame(a, b)).toBe(true)
})

test('different dimensions empty', () => {
  const a = new ImageData(10, 10)
  const b = new ImageData(10, 5)

  expect(isSame(a, b)).toBe(false)
})

test('same dimensions different data', () => {
  const a = new ImageData(10, 10)
  const b = new ImageData(10, 10)

  a.data.set([128, 128, 128, 128])

  expect(isSame(a, b)).toBe(false)
})
