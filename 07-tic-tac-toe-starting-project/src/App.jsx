import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameplayLog from "./components/GameplayLog";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./utilities/winning-combinations";

const INITIAL_PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(playerMoves) {
  let currentPlayer = "X";

  if (playerMoves.length > 0 && playerMoves[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  WINNING_COMBINATIONS.forEach((combinations) => {
    const firstSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = players[firstSymbol];
    }
  });

  return winner;
}

function deriveGameBoard(moves) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])];

  for (let move of moves) {
    const { squarePosition, player } = move;
    const { row, col } = squarePosition;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [playerMoves, setPlayerMoves] = useState([]);
  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  const activePlayer = derivedActivePlayer(playerMoves);
  const gameBoard = deriveGameBoard(playerMoves);
  const winner = deriveWinner(gameBoard, players);
  const isDraw = playerMoves.length === 9 && !winner;

  function handleSwitchPlayer(xPosition, yPosition) {
    setPlayerMoves((currentMoves) => {
      const currentPlayer = derivedActivePlayer(currentMoves);

      const updatedPlayerMoves = [
        {
          player: currentPlayer,
          squarePosition: {
            row: xPosition,
            col: yPosition,
          },
        },
        ...currentMoves,
      ];

      return updatedPlayerMoves;
    });
  }

  function handleResetBoard() {
    setPlayerMoves([]);
  }

  function handleSavePlayerName(name, symbol) {
    setPlayers((playerData) => {
      const updatedPlayerData = { ...playerData };
      updatedPlayerData[symbol] = name.toUpperCase();

      return updatedPlayerData;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={INITIAL_PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onSave={handleSavePlayerName}
          />
          <Player
            initialName={INITIAL_PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onSave={handleSavePlayerName}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onRematchClick={handleResetBoard} />
        )}
        <GameBoard onSquareSelected={handleSwitchPlayer} board={gameBoard} />
      </div>
      <GameplayLog histories={playerMoves} players={players} />
    </main>
  );
}

export default App;
