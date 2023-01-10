import styled from 'styled-components'

export const Board = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  margin-bottom: 40px;
`
export const UndoButton = styled.button`
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid;
  color: rgb(150 150 150);
  padding: 10px 130px 12px;
  cursor: pointer;
  user-select: none;

  :hover {
    background-color: rgba(150, 150, 150, 0.1);
  }

  :active {
    box-shadow: inset 0px 10px 20px 5px rgba(0, 0, 0, 0.08);
    transform: translateY(-0.5px);
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
    background-color: #ccc;
  }
`
