interface Winner {
  player: winnerType
  group: number[] | null
}

export default function findWinner(tiles: string[]): Winner {
  let winnerGroup: number[] | null = null
  const groups = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
  ]
  let winner: winnerType = null
  if (
    groups.some((g, index) => {
      if (
        tiles[g[0]] === tiles[g[1]] &&
        tiles[g[1]] === tiles[g[2]] &&
        tiles[g[0]] !== ''
      ) {
        winnerGroup = groups[index]
        winner = tiles[g[0]] as winnerType
        return true
      }
    })
  ) {
    return { player: winner, group: winnerGroup }
  }

  // Check for tie game.
  if (tiles.every((_, i) => tiles[i] !== '')) {
    return { player: 'tie', group: null }
  }

  // Game is not over.
  return { player: null, group: null }
}
