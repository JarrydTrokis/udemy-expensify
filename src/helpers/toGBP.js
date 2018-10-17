export const toGBP = (numberToBeConverted) => {
  return (numberToBeConverted / 100).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })
}
