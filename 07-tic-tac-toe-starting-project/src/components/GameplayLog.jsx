import React from "react";

export default function GameplayLog({ histories }) {
  return (
    <ol id="log">
      {histories.map((history) => (
        <li key={`${history.squarePosition.row}${history.squarePosition.col}`}>
          {history.player} selected : {history.squarePosition.row},
          {history.squarePosition.col}
        </li>
      ))}
    </ol>
  );
}
