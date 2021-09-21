import { formatDate, formatDateToIso } from '.'

describe('formatDate()', () => {
  it('should return date format', () => {
    expect(formatDate('1997-10-21')).toStrictEqual('Oct 20, 1997')
  })
})

describe('formatDateToIso()', () => {
  it('should return date format', () => {
    expect(formatDateToIso('Sep 7, 1924')).toStrictEqual('1924-09-07')
  })
})
