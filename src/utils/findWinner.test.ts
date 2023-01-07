import findWinner from './findWinner'

describe('findWinner', () => {
  it('should win by row', () => {
    // prettier-ignore
    const tiles = [
      'o', 'o', '',
      'x', 'x', 'x',
      '',  'o', ''
    ]
    const expected = { player: 'x', group: [3, 4, 5] }
    expect(findWinner(tiles)).toMatchObject(expected)
  })

  it('should win by column', () => {
    // prettier-ignore
    const tiles = [
      'o', 'x', '',
      'o', 'x', '',
      'o',  '', ''
    ]
    const expected = { player: 'o', group: [0, 3, 6] }
    expect(findWinner(tiles)).toMatchObject(expected)
  })

  it('should win by diagonal', () => {
    // prettier-ignore
    const tiles = [
      'o', 'x', '',
      'x', 'o', '',
      '',  '', 'o'
    ]
    const expected = { player: 'o', group: [0, 4, 8] }
    expect(findWinner(tiles)).toMatchObject(expected)
  })

  it('should not find any winner if game is not over', () => {
    // prettier-ignore
    const tiles = [
      'o', 'x', '',
      'o', 'x', '',
      '',  '', ''
    ]
    const expected = { player: null, group: null }
    expect(findWinner(tiles)).toMatchObject(expected)
  })

  it('should tie if game is over by no player won', () => {
    // prettier-ignore
    const tiles = [
      'o', 'x', 'x',
      'x', 'o', 'o',
      'x', 'o', 'x'
    ]
    const expected = { player: 'tie', group: null }
    expect(findWinner(tiles)).toMatchObject(expected)
  })
})
