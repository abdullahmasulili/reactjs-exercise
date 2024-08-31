import React from "react";

export default function GameplayLog({ histories, players }) {
  return (
    <ol id="log">
      {histories.map((history) => (
        <li key={`${history.squarePosition.row}${history.squarePosition.col}`}>
          {players[history.player]} selected : {history.squarePosition.row},
          {history.squarePosition.col}
        </li>
      ))}
    </ol>
  );
}
