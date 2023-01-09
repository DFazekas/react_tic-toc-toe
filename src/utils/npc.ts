/**
 * Returns a random move for the NPC. If there are no empty tiles, returns -1.
 * @param tiles The current state of the game board.
 * @returns The index of the tile to move to.
 */
export default function findMove(tiles: string[]): number {
  let remainingTiles: number[] = tiles.reduce((acc: number[], tile, index) => {
    if (tile === '') acc.push(index)
    return acc
  }, [])

  if (remainingTiles.length === 0) {
    // No empty tiles, return -1 to indicate no move.
    return -1
  }

  // Choose a random available tile.
  return remainingTiles[Math.floor(Math.random() * remainingTiles.length)]
}
