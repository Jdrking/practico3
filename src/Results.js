import React, { Component } from 'react';
import styled from 'styled-components';

// Estilos de ResultsContainer, ResultMessage, ScoreText y ResetButton...

const ResultsContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const ResultMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ScoreText = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ResetButton = styled.button`
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
  margin-top: 1rem;

  &:hover {
    background-color: #f55d5f;
  }
`;

class Results extends Component {
  render() {
    const { playerName, playerScore, computerScore, roundsPlayed, totalRounds, onResetClick } = this.props;
    let resultMessage = '';

    if (roundsPlayed === totalRounds) {
      if (playerScore > computerScore) {
        resultMessage = `${playerName}, ¡Ganaste el juego! 🎉`;
      } else if (playerScore < computerScore) {
        resultMessage = 'La Computadora ganó el juego. 😢';
      } else {
        resultMessage = '¡Es un empate! 🤝';
      }
    }

    return (
      <ResultsContainer>
        {roundsPlayed === totalRounds && (
          <ResultMessage>{resultMessage}</ResultMessage>
        )}
        <ScoreText>
          {playerName}: {playerScore} | Computadora: {computerScore}
        </ScoreText>
        <p>Rondas Jugadas: {roundsPlayed} / {totalRounds}</p>
        {roundsPlayed === totalRounds && (
          <ResetButton onClick={onResetClick}>Reiniciar Juego</ResetButton>
        )}
      </ResultsContainer>
    );
  }
}

export default Results;
