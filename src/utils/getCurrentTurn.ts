/**
 * Returns the current turn. If the number of pieces for each player is equal, then it returns the first player.
 * @param tiles The current tiles.
 * @param players The players.
 * @returns The current turn.
 */
export default function getCurrentTurn(
  tiles: string[],
  players: player[]
): player {
  const countPieces = (piece: pieceType): number =>
    tiles.reduce((acc, cur) => (cur === piece ? acc + 1 : acc), 0)
  const num0Pieces = countPieces(players[0].piece)
  const num1Pieces = countPieces(players[1].piece)
  return num0Pieces <= num1Pieces ? players[0] : players[1]
}
