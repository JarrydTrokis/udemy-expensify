import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('Default values are set correct for filters', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('Should set sortby to AMOUNT', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })

  expect(state.sortBy).toBe('amount')
})

test('Should set sortby to DATE', () => {
  const prevState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducer(prevState, { type: 'SORT_BY_DATE' })

  expect(state.sortBy).toBe('date')
})

test('Should set TEXT FILTER', () => {
  const text = 'water'
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text })

  expect(state.text).toBe(text)
})

test('Should set START DATE', () => {
  const startDate = moment(0)
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate })

  expect(state.startDate).toEqual(startDate)
})

test('Should set END DATE', () => {
  const endDate = moment(0)
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate })

  expect(state.endDate).toEqual(endDate)
})
