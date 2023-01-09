/// <reference types="react-scripts" />
type winnerType = 'x' | 'o' | 'tie' | null
type pieceType = 'x' | 'o'
type playerType = 'human' | 'npc'
type player = { player: playerType; piece: pieceType }
