import React, { Component } from 'react';
import styled from 'styled-components';
import GameArea from './GameArea';
import Results from './Results';

// Estilo del contenedor principal de la aplicación.
const AppContainer = styled.div`
  text-align: center;
  font-family: 'Heebo', sans-serif;
  background-color: #f0f0f0;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Estilo del encabezado.

const Header = styled.header`
  background-color: rgb(240, 137, 137);
  padding: 1rem;
  color: black;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

class App extends Component {
  constructor() {
    super();
    // Estado inicial de la aplicación.
    this.state = {
      playerName: '',
      playerScore: 0,
      computerScore: 0,
      roundsPlayed: 0,
      totalRounds: 5,
      gameFinished: false,
      nameLocked: false,
    };
  }

  // Manejar el cambio en el nombre del jugador.

  handleNameChange = (event) => {
    if (!this.state.nameLocked) {
      this.setState({ playerName: event.target.value });
    }
  };

  // Manejar el clic en las opciones del juego.

  handleOptionClick = (playerChoice) => {
    if (!this.state.gameFinished && this.state.playerName !== '') {
      const computerChoice = this.generateComputerChoice();
      this.determineWinner(playerChoice, computerChoice);
    } else if (this.state.playerName === '') {
      alert('Por favor, ingresa tu nombre antes de jugar.');
    }
  };

  // Generar una elección aleatoria para la computadora.

  generateComputerChoice = () => {
    const choices = ['piedra', 'papel', 'tijeras'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  // Determinar al ganador de una ronda.

  determineWinner = (playerChoice, computerChoice) => {
    const { playerScore, computerScore, roundsPlayed, totalRounds } = this.state;
    let resultMessage = '';

    if (roundsPlayed === totalRounds) {
      this.setState({ gameFinished: true });
      if (playerScore > computerScore) {
        resultMessage = `${this.state.playerName}, ¡ganaste el juego!`;
      } else if (playerScore < computerScore) {
        resultMessage = 'La Computadora ganó el juego.';
      } else {
        resultMessage = '¡Es un empate!';
      }
    } else {
      if (playerChoice === computerChoice) {
        resultMessage = `${this.state.playerName} eligió ${playerChoice} y la Computadora eligió ${computerChoice}, la ronda es un empate.`;
      } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijeras') ||
        (playerChoice === 'tijeras' && computerChoice === 'papel') ||
        (playerChoice === 'papel' && computerChoice === 'piedra')
      ) {
        resultMessage = `${this.state.playerName} eligió ${playerChoice} y la Computadora eligió ${computerChoice}, la ronda la ganó ${this.state.playerName}!`;
        this.setState({ playerScore: playerScore + 1 });
      } else {
        resultMessage = `${this.state.playerName} eligió ${playerChoice} y la Computadora eligió ${computerChoice}, la ronda la ganó la Computadora.`;
        this.setState({ computerScore: computerScore + 1 });
      }

      this.setState({ roundsPlayed: roundsPlayed + 1 });
    }

    alert(resultMessage);
  };

  // Reiniciar el juego.
  
  resetGame = () => {
    this.setState({
      playerScore: 0,
      computerScore: 0,
      roundsPlayed: 0,
      gameFinished: false,
      nameLocked: false,
    });
  };

  lockName = () => {
    this.setState({ nameLocked: true });
  };

  render() {
    return (
      <AppContainer>
        <Header>
          <h1>Piedra, Papel o Tijera</h1>
          <p><b>Reglas: Piedra 🥌 vence Tijeras // Tijeras ✂️ vence Papel // Papel 📋 vence Piedra</b></p>
        </Header>
        <GameArea
          playerName={this.state.playerName}
          onNameChange={this.handleNameChange}
          onOptionClick={this.handleOptionClick}
          gameFinished={this.state.gameFinished}
          nameLocked={this.state.nameLocked}
          lockName={this.lockName}
        />
        <Results
          playerName={this.state.playerName}
          playerScore={this.state.playerScore}
          computerScore={this.state.computerScore}
          roundsPlayed={this.state.roundsPlayed}
          totalRounds={this.state.totalRounds}
          gameFinished={this.state.gameFinished}
          onResetClick={this.resetGame}
        />
      </AppContainer>
    );
  }
}

export default App;
