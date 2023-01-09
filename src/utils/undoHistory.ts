/**
 * Undoes the last human move in the history of moves.
 * @summary If there is only one player, then it undoes the last two
 * moves if the current player is the human.
 * Otherwise, it undoes the last move.
 * @param numPlayers The number of players.
 * @param history The history of moves.
 * @param currentPlayer The current player.
 * @returns The new history.
 */
export default function undoHistory(
  numPlayers: number,
  history: string[][],
  currentPlayer: playerType
): string[][] {
  //TODO: unit test.
  if (history.length < 2) {
    return history
  }

  const currentHist = [...history]
  if (numPlayers === 1 && currentPlayer === 'human') {
    // The NPC plays faster than a human can undo,
    // so we need to undo to the last human move.
    currentHist.pop()
  }

  currentHist.pop()
  return currentHist
}
