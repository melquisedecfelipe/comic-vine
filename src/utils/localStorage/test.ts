import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      '@Test:localStorage',
      JSON.stringify(['1', '2'])
    )

    expect(getStorageItem('@Test:localStorage')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should add the item to localStorage', () => {
    setStorageItem('@Test:localStorage', ['1', '2'])

    expect(window.localStorage.getItem('@Test:localStorage')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
