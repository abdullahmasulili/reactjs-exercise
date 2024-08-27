import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [playerOneName, setPlayerOneName] = useState("Player 1");
  const [playerTwoName, setPlayerTwoName] = useState("Player 2");

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            name={playerOneName}
            symbol="X"
            onSave={(name) => setPlayerOneName(name)}
          />
          <Player
            name={playerTwoName}
            symbol="O"
            onSave={(name) => setPlayerTwoName(name)}
          />
        </ol>
      </div>
    </main>
  );
}

export default App;
