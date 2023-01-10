import getCurrentTurn from './getCurrentTurn'

describe('getCurrentTurn', () => {
  it('should return the first player if the number of pieces for each player is equal', () => {
    const tiles = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', '']
    const players = [
      { player: 'human', piece: 'x' },
      { player: 'human', piece: 'o' }
    ] as player[]
    const result = getCurrentTurn(tiles, players)
    expect(result).toMatchObject(players[0])
  })

  it('should return the second player if the number of pieces for the first player is greater than the number of pieces for the second player', () => {
    const tiles = ['x', 'o', 'x', 'o', 'x', 'o', 'x', '', '']
    const players = [
      { player: 'human', piece: 'x' },
      { player: 'human', piece: 'o' }
    ] as player[]
    const result = getCurrentTurn(tiles, players)
    expect(result).toMatchObject(players[1])
  })

  it('should return the first player if the number of pieces for the second player is greater than the number of pieces for the first player', () => {
    const tiles = ['x', 'o', 'x', 'o', 'x', 'o', 'o', '', '']
    const players = [
      { player: 'human', piece: 'x' },
      { player: 'human', piece: 'o' }
    ] as player[]
    const result = getCurrentTurn(tiles, players)
    expect(result).toMatchObject(players[0])
  })
})
