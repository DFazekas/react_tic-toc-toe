import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

const renderTiles = (): HTMLButtonElement[] => {
  const { container } = render(<App numPlayers={2} />)
  return Array.from(
    container.getElementsByClassName('tile')
  ) as HTMLButtonElement[]
}

test('starts with 9 empty tiles', () => {
  const tiles = renderTiles()
  tiles.forEach((tile) => expect(tile).toHaveTextContent(''))
  expect(tiles.length).toBe(9)
})

describe('a game', () => {
  it('should display proper piece on tile click', () => {
    const tiles = renderTiles()
    tiles.every((tile) => expect(tile).toHaveTextContent(''))
    userEvent.click(tiles[1])
    expect(tiles[1]).toHaveTextContent('x')
    userEvent.click(tiles[0])
    expect(tiles[0]).toHaveTextContent('o')
  })

  it("shouldn't allow stealing a tile", () => {
    const tiles = renderTiles()
    userEvent.click(tiles[0])
    expect(tiles[0]).toHaveTextContent('x')
    userEvent.click(tiles[0])
    expect(tiles[0]).toHaveTextContent('x')
  })

  it('should correctly display player O won', () => {
    const tiles = renderTiles()
    expect(screen.queryByText(/Winner is O!/i)).toBeNull()
    const moves = [0, 1, 3, 4, 8, 7]
    moves.forEach((move) => userEvent.click(tiles[move]))
    expect(screen.queryByText(/Winner is O!/i)).not.toBeNull()
  })

  it('should correctly display player X won', () => {
    const tiles = renderTiles()
    expect(screen.queryByText(/Winner is X!/i)).toBeNull()
    const moves = [0, 1, 3, 2, 6]
    moves.forEach((move) => userEvent.click(tiles[move]))
    expect(screen.queryByText(/Winner is X!/i)).not.toBeNull()
  })

  it('should correctly display tie game', () => {
    const tiles = renderTiles()
    expect(screen.queryByText(/Tie game!/i)).toBeNull()
    const moves = [0, 1, 4, 2, 5, 3, 6, 8, 7]
    moves.forEach((move) => userEvent.click(tiles[move]))
    expect(screen.queryByText(/Tie game!/i)).not.toBeNull()
  })

  it("shouldn't allow taking another tile after game is won", () => {
    const tiles = renderTiles()
    const moves = [0, 1, 3, 4, 8, 7, 6]
    moves.forEach((move) => userEvent.click(tiles[move]))
    expect(tiles[6]).toHaveTextContent('')
  })

  it('should revert last move if undo is clicked', () => {
    const { container } = render(<App numPlayers={2} />)
    const undoBtn = container.querySelector('#undo') as HTMLButtonElement
    const tiles = Array.from(
      container.getElementsByClassName('tile')
    ) as HTMLButtonElement[]
    const moves = [0, 1, 3]
    moves.forEach((move) => userEvent.click(tiles[move]))
    moves.forEach((index) => expect(tiles[index]).not.toHaveTextContent(''))
    userEvent.click(undoBtn!)
    expect(tiles[3]).toHaveTextContent('')
  })
})
