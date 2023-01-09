import undoHistory from './undoHistory'

describe('undoHistory', () => {
  it('should undo the last two moves if there is only one player and the NPC moved last', () => {
    const numPlayers = 1
    // prettier-ignore
    const history = [
      [
        '',  '',  '',
        '',  '',  '',
        '',  '',  ''
      ], 
      [
        'x', '',  '',
        '',  '',  '',
        '',  '',  ''
      ], 
      [
        'x', '',  '',
        'o', '',  '',
        '',  '',  ''
      ]];
    const currentPlayer = 'human'
    // prettier-ignore
    const expected = [[
      '',  '',  '',
      '',  '',  '',
      '',  '',  ''
    ]]
    expect(undoHistory(numPlayers, history, currentPlayer)).toMatchObject(
      expected
    )
  })

  it('should undo the last move if there is only one player and the human moved last', () => {
    const numPlayers = 1
    // prettier-ignore
    const history = [
      [
        '',  '',  '',
        '',  '',  '',
        '',  '',  ''
      ],
      [
        'x', 'x',  'o',
        'o', 'o',  'x',
        'x',  '',  ''
      ],
      [
        'x', 'x',  'o',
        'o', 'o',  'x',
        'x',  '',  'o'
      ],
      [
        'x', 'x',  'o',
        'o', 'o',  'x',
        'x',  'x',  'o'
      ]];
    const currentPlayer = 'npc'
    // prettier-ignore
    const expected = [
      [
        '',  '',  '',
        '',  '',  '',
        '',  '',  ''
      ],
      [
        'x', 'x',  'o',
        'o', 'o',  'x',
        'x',  '',  ''
      ],
      [
        'x', 'x',  'o',
        'o', 'o',  'x',
        'x',  '',  'o'
      ],]
    expect(undoHistory(numPlayers, history, currentPlayer)).toMatchObject(
      expected
    )
  })

  it('should undo the last move if there are two players', () => {
    const numPlayers = 2
    // prettier-ignore
    const history = [
      [
        '',  '',  '',
        '',  '',  '',
        '',  '',  ''
      ], 
      [
        'x', '',  '',
        '',  '',  '',
        '',  '',  ''
      ], 
      [
        'x', '',  '',
        'o', '',  '',
        '',  '',  ''
      ]
    ]
    const currentPlayer = 'human'
    // prettier-ignore
    const expected = [
      [
        '',  '',  '',
        '',  '',  '',
        '',  '',  ''
      ], 
      [
        'x', '',  '',
        '',  '',  '',
        '',  '',  ''
      ]
    ]
    expect(undoHistory(numPlayers, history, currentPlayer)).toMatchObject(
      expected
    )
  })

  it('should not undo if there are no pieces on the board', () => {
    const numPlayers = 1
    // prettier-ignore
    const history = [
      [
        '',  '',  '',
        '',  '',  '',
        '',  '',  ''
      ]];
    const currentPlayer = 'human'
    // prettier-ignore
    const expected = [[
      '',  '',  '',
      '',  '',  '',
      '',  '',  ''
    ]]
    expect(undoHistory(numPlayers, history, currentPlayer)).toMatchObject(
      expected
    )
  })
})
