export default (expenses) => {
  if (!Array.isArray(expenses)) return expenses.amount

  return expenses
    .map(expense => expense.amount)
    .reduce((total, current) => total + current, 0)
}
