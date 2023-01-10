import { useEffect, useState } from 'react'
import { Board } from './App.styled'
import Button from './components/Button/Button'
import findWinner from './utils/findWinner'
import findRandomMove from './utils/npc'
import undoHistory from './utils/undoHistory'
import { Container, Row, Button as BootstrapButton } from 'react-bootstrap'

const initialTiles: string[] = Array(9).fill('')
let players: player[]

function initializePlayers(numPlayers: number): player[] {
  if (numPlayers === 1)
    return [
      { player: 'human', piece: 'x' },
      { player: 'npc', piece: 'o' }
    ]

  return [
    { player: 'human', piece: 'x' },
    { player: 'human', piece: 'o' }
  ]
}

function App({ numPlayers = 1 }: { numPlayers: number }) {
  useEffect(() => {
    // Initialize players.
    players = initializePlayers(numPlayers)
  }, [numPlayers])

  const [tiles, setTiles] = useState<string[]>(initialTiles)
  const [turn, setTurn] = useState<player>(initializePlayers(numPlayers)[0])
  const [history, setHistory] = useState([initialTiles])
  const [winner, setWinner] = useState<winnerType>(null)
  const [winningGroup, setWinningGroup] = useState<boolean[]>(
    Array(9).fill(false)
  )

  useEffect(() => {
    const currentTurn = getCurrentTurn(tiles, players)
    setTurn(currentTurn)
    const currentWinner = updateWinner(tiles)

    if (currentTurn.player === 'npc' && currentWinner === null) {
      // Delay for 1 second to make it look like the NPC is thinking.
      setTimeout(() => {
        const move = findRandomMove(tiles)
        if (move === -1) throw new Error('No move found for NPC!')
        handleTileSelection(move, currentTurn.piece)
      }, 1000)
    }
  }, [tiles])

  /**
   * Handles highlighting the winning group.
   * @param group The winning group.
   */
  const handleShowingWinner = (group: number[] | null): void => {
    let winners = new Array(tiles.length).fill(false)
    if (!group) {
      setWinningGroup(winners)
      return
    }
    group.map((i) => (winners[i] = true))
    setWinningGroup(winners)
  }

  /**
   * Returns the current turn. If the number of pieces for each player is equal, then it returns the first player.
   * @param tiles The current tiles.
   * @param players The players.
   * @returns The current turn.
   */
  function getCurrentTurn(tiles: string[], players: player[]): player {
    //TODO: unit test.
    const countPieces = (piece: pieceType): number =>
      tiles.reduce((acc, cur) => (cur === piece ? acc + 1 : acc), 0)
    const num0Pieces = countPieces(players[0].piece)
    const num1Pieces = countPieces(players[1].piece)
    return num0Pieces <= num1Pieces ? players[0] : players[1]
  }

  /**
   * Finds the winner, and updates the winner state. Also updates the winning group.
   * @param tiles The current tiles.
   * @returns The winner.
   */
  function updateWinner(tiles: string[]): winnerType {
    const { player, group } = findWinner(tiles)
    setWinner(player)
    handleShowingWinner(group)
    return player
  }

  /**
   * Updates the tiles array with the new move, and updates the history.
   * @param index The index of the tile that was clicked.
   */
  function handleTileSelection(index: number, piece: pieceType): void {
    const newTiles = [...tiles]
    newTiles[index] = piece
    setTiles(newTiles)
    setHistory([...history, newTiles])
  }

  /**
   * Handles the click event on a tile.
   * If the tile is empty, and there is no winner, then the tile is updated.
   * @param index The index of the tile that was clicked.
   */
  function onTileClick(index: number): void {
    if (turn.player === 'human' && tiles[index] === '' && winner === null) {
      handleTileSelection(index, turn.piece)
    }
  }

  /**
   * Handles the click event on the undo button.
   */
  const onUndoClick = () => {
    const currentHist = undoHistory(
      numPlayers,
      history,
      getCurrentTurn(tiles, players).player
    )
    setHistory(currentHist)
    const currentTiles = currentHist.slice(-1)[0]
    setTiles(currentTiles)
  }

  const WinnerDisplay = () => {
    return (
      <h1>
        {winner === 'tie' ? 'Tie game!' : `Winner is ${winner!.toUpperCase()}!`}
      </h1>
    )
  }

  const TurnDisplay = () => {
    if (numPlayers === 2) {
      return <h1>{turn.piece.toUpperCase()}'s turn</h1>
    }
    if (turn.player === 'npc') {
      return <h1>NPC's turn</h1>
    }
    return <h1>Human's turn</h1>
  }

  return (
    <div className='App'>
      <Container>
        <Row xs={1} className='mb-5'>
          <BootstrapButton variant='light' href='/'>
            Home
          </BootstrapButton>
        </Row>
        <Row className='mb-2'>
          {winner ? <WinnerDisplay /> : <TurnDisplay />}
        </Row>
        <Row>
          <Board>
            {tiles.map((tile, index) => (
              <Button
                className={`tile ${winningGroup[index] ? 'won' : ''}`}
                key={`tile-${index}`}
                handleClick={(): void => onTileClick(index)}
              >
                {tile}
              </Button>
            ))}
          </Board>
        </Row>
        <Row>
          <BootstrapButton
            id='undo'
            variant={
              winner !== null
                ? 'danger'
                : history.length < 2
                ? 'outline-dark'
                : 'dark'
            }
            disabled={history.length < 2}
            onClick={() => onUndoClick()}
          >
            Undo
          </BootstrapButton>
        </Row>
      </Container>
    </div>
  )
}

export default App
