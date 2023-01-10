const WinnerDisplay = ({ winner }: { winner: winnerType }) => {
  return (
    <h1>
      {winner === 'tie' ? 'Tie game!' : `Winner is ${winner!.toUpperCase()}!`}
    </h1>
  )
}
export default WinnerDisplay
