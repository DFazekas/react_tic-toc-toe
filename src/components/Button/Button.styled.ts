import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid rgb(150, 150, 150);
  border-radius: 0;
  border-right: 1px solid rgb(150, 150, 150);
  color: #26ff92;
  font-size: 40px;
  font-weight: bold;
  height: 100px;
  padding-bottom: 6px;

  &:nth-child(3n) {
    border-right: none;
  }
  &:nth-child(1n + 7) {
    border-bottom: none;
  }
  &:focus {
    border-right: 1px solid rgb(150 150 150);
    border-bottom: 1px solid rgb(150 150 150);
    outline: none;

    &:nth-child(3n) {
      border-right: none;
    }
    &:nth-child(1n + 7) {
      border-bottom: none;
    }
  }

  &.tile-x {
    color: #ff00de;
    font-weight: normal;
  }

  &.won {
    background-color: #ffff003b;
    color: black;
  }
`
