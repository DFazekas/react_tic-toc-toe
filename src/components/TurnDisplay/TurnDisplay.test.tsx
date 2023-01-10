import { render } from '@testing-library/react'
import TurnDisplay from './TurnDisplay'

describe('TurnDisplay', () => {
  it("should render NPC's turn if numPlayer == 1 and turn == 'npc'", () => {
    let turn: player = { piece: 'x', player: 'npc' }
    const { getByText } = render(<TurnDisplay numPlayers={1} turn={turn} />)
    expect(getByText("NPC's turn")).toBeInTheDocument()
  })

  it("should render humans's turn if numPlayer == 1 and turn == 'human'", () => {
    let turn: player = { piece: 'x', player: 'human' }
    const { getByText } = render(<TurnDisplay numPlayers={1} turn={turn} />)
    expect(getByText("Human's turn")).toBeInTheDocument()
  })

  it("should render X's turn if numPlayer == 2 and piece == 'X'", () => {
    let turn: player = { piece: 'x', player: 'human' }
    const { getByText } = render(<TurnDisplay numPlayers={2} turn={turn} />)
    expect(getByText("X's turn")).toBeInTheDocument()
  })

  it("should render O's turn if numPlayer == 2 and piece == 'O'", () => {
    let turn: player = { piece: 'o', player: 'human' }
    const { getByText } = render(<TurnDisplay numPlayers={2} turn={turn} />)
    expect(getByText("O's turn")).toBeInTheDocument()
  })
})
