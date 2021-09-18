import { slugify } from '.'

describe('slugify()', () => {
  it('should return the right format when slugify', () => {
    expect(slugify(1253, 'Lightning Lad')).toStrictEqual('1253-lightning-lad')
  })
})
