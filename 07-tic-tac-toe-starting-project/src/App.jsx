import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameplayLog from "./components/GameplayLog";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [playerMoves, setPlayerMoves] = useState([]);

  function handleSwitchPlayer(xPosition, yPosition) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
    setPlayerMoves((currentMoves) => {
      let currentPlayer = "X";

      if (currentMoves.length > 0 && currentMoves[0].player === "X") {
        currentPlayer = "O";
      }

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
        <GameplayLog />
      </div>
    </main>
  );
}

export default App;
