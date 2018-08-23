import moment from 'moment'
import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../../actions/filters'

test('Should generate SET START DATE action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('Should generate SET END DATE action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('Should set text filter object', () => {
  const text = 'water'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('Should set text filter object DEFAULT VALUES', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('Should set SORT BY AMOUNT', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('Should set SORT BY DATE', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  })
})
