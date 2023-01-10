import initializePlayers from './initializePlayers'

describe('initializePlayers', () => {
  it('should return an array of two objects, one human and NPC, if number of players is 1', () => {
    const actual = initializePlayers(1)
    const expected = [
      { player: 'human', piece: 'x' },
      { player: 'npc', piece: 'o' }
    ]
    expect(actual).toMatchObject(expected)
  })

  it('should return an array of two human objects if number of players is 2', () => {
    const actual = initializePlayers(2)
    const expected = [
      { player: 'human', piece: 'x' },
      { player: 'human', piece: 'o' }
    ]
    expect(actual).toMatchObject(expected)
  })
})
