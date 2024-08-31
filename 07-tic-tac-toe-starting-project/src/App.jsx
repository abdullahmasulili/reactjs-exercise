import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameplayLog from "./components/GameplayLog";

function derivedActivePlayer(playerMoves) {
  let currentPlayer = "X";

  if (playerMoves.length > 0 && playerMoves[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [playerMoves, setPlayerMoves] = useState([]);
  const activePlayer = derivedActivePlayer(playerMoves);

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSquareSelected={handleSwitchPlayer} moves={playerMoves} />
      </div>
      <GameplayLog histories={playerMoves} />
    </main>
  );
}

export default App;
