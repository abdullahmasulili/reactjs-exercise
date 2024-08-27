import React from "react";
import { useState } from "react";

export default function Player({ name = "Player", symbol, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState("");

  let playerNameEl = <span className="player-name">{name}</span>;

  if (isEditing) {
    <input
      type="text"
      value={playerName}
      onChange={(e) => setPlayerName(e.target.value)}
    />;
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
      <button onClick={isEditing ? handleSave : handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
