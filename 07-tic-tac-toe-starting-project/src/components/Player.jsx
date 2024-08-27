import React from "react";
import { useState } from "react";

export default function Player({ name = "Player", symbol, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState("");

  let playerNameEl = <span className="player-name">{name}</span>;
  let buttonCaption = "Edit";
  let buttonClickHandler = handleEdit;

  if (isEditing) {
    playerNameEl = (
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        required
      />
    );

    buttonCaption = "Save";
    buttonClickHandler = handleSave;
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    onSave(playerName);
    setIsEditing(false);
  }

  return (
    <li>
      <span className="player">
        {playerNameEl}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={buttonClickHandler}>{buttonCaption}</button>
    </li>
  );
}
