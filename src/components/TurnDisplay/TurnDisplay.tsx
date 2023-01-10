const TurnDisplay = ({
  numPlayers,
  turn
}: {
  numPlayers: number
  turn: player
}) => {
  let content
  if (numPlayers === 1) {
    content = turn.player === 'npc' ? `NPC's turn` : "Human's turn"
  } else if (numPlayers === 2) {
    content = `${turn.piece.toUpperCase()}'s turn`
  } else {
    throw new Error('Invalid number of players!')
  }
  return <h1>{content}</h1>
}

export default TurnDisplay
