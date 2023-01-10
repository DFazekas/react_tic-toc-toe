export default function initializePlayers(numPlayers: number): player[] {
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
