import React, { Component } from 'react';
import styled from 'styled-components';

// Estilos de GameAreaContainer, PlayerNameInput, StartButton y GameButtons...


const GameAreaContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const GameButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const PlayerNameInput = styled.input`
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  text-align: center;
  outline: none;
  transition: border-color 0.2s;

  &:disabled {
    background-color: #f0f0f0;
  }

  &:focus {
    border-color: #f08789;
  }
`;

const StartButton = styled.button`
  background-color: #f08789;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f55d5f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

class GameArea extends Component {
  render() {
    const { playerName, onNameChange, onOptionClick, gameFinished, nameLocked, lockName } = this.props;

    return (
      <GameAreaContainer>
        <h2>Ingresa tu nombre, presiona Comenzar y luego elegì tu arma...¡¡Suerte!!</h2>
        <PlayerNameInput
          type="text"
          placeholder="Ingresa tu nombre"
          value={playerName}
          onChange={onNameChange}
          disabled={nameLocked || gameFinished}
        />
        <StartButton onClick={lockName} disabled={nameLocked || gameFinished || playerName.trim() === ''}>
          {nameLocked ? 'Comenzar' : 'Comenzar'}
        </StartButton>
        <GameButtons>
          <button onClick={() => onOptionClick('piedra')} disabled={!nameLocked || gameFinished}>
            🥌 Piedra
          </button>
          <button onClick={() => onOptionClick('papel')} disabled={!nameLocked || gameFinished}>
            📋 Papel
          </button>
          <button onClick={() => onOptionClick('tijeras')} disabled={!nameLocked || gameFinished}>
            ✂️ Tijera
          </button>
        </GameButtons>
      </GameAreaContainer>
    );
  }
}

export default GameArea;
