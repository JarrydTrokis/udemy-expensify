import { toGBP } from '../../helpers/toGBP'

test('should return a string', () => {
  const res = toGBP(234124)
  expect(typeof res).toBe('string')
})

test('Should format number to be British Pound currency', () => {
  const res = toGBP(3242)
  expect(res.includes('£')).toBeTruthy()
})
