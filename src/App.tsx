import { useEffect, useState } from 'react'
import { Board, UndoButton } from './App.styled'
import Button from './components/Button/Button'
import findWinner from './utils/findWinner'

const initialTiles: string[] = Array(9).fill('')
const enum Player {
  'X' = 'x',
  'O' = 'o'
}
const startingPlayer = Player.X

function App() {
  const [tiles, setTiles] = useState(initialTiles)
  const [turn, setTurn] = useState<Player>(startingPlayer)
  const [history, setHistory] = useState([initialTiles])
  const [winner, setWinner] = useState<winnerType>(null)
  const [winningGroup, setWinningGroup] = useState<boolean[]>(
    Array(9).fill(false)
  )

  useEffect(() => {
    setTurn(turn === Player.X ? Player.O : Player.X)
    const { player, group } = findWinner(tiles)
    setWinner(player)
    handleShowingWinner(group)
  }, [tiles])

  const handleShowingWinner = (group: number[] | null): void => {
    let winners = new Array(tiles.length).fill(false)
    if (!group) {
      setWinningGroup(winners)
      return
    }
    group.map((i) => (winners[i] = true))
    setWinningGroup(winners)
  }

  const handleClick = (index: number): void => {
    if (tiles[index] === '' && winner === null) {
      const newTiles = tiles.slice()
      newTiles[index] = turn
      setTiles(newTiles)
      setHistory([...history, newTiles])
    }
  }

  const handleUndo = () => {
    console.log("I'm undoing!")
    if (history.length > 1) {
      const currentHist = history.slice()
      currentHist.pop()
      setHistory(currentHist)
      setTiles(currentHist.slice(-1)[0])
    }
  }

  const DisplayWinner = () => {
    return (
      <h1>
        {winner === 'tie' ? 'Tie game!' : `Winner is ${winner!.toUpperCase()}!`}
      </h1>
    )
  }

  return (
    <div className='App'>
      <div>Tic Toc Toe</div>
      {winner ? <DisplayWinner /> : <h1>{turn.toUpperCase()}'s turn</h1>}
      <Board>
        {tiles.map((tile, index) => (
          <Button
            className={`tile ${winningGroup[index] ? 'won' : ''}`}
            key={`tile-${index}`}
            handleClick={(): void => handleClick(index)}
          >
            {tile}
          </Button>
        ))}
      </Board>
      <UndoButton
        id='undo'
        disabled={history.length < 2}
        onClick={() => handleUndo()}
      >
        Undo
      </UndoButton>
    </div>
  )
}

export default App
