import React from "react";
import { useState } from "react";

export default function Player({
  initialName = "Player",
  symbol,
  isActive = false,
  onSave,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let playerNameEl = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    playerNameEl = (
      <input
        type="text"
        value={playerName}
        onChange={handleInputChange}
        required
      />
    );

    buttonCaption = "Save";
  }

  function handleEdit() {
    setIsEditing((oldValue) => !oldValue);
  }

  function handleInputChange({ target }) {
    setPlayerName(target.value);
  }

  function handleSave() {
    onSave(playerName, symbol);
    setIsEditing(false);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameEl}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={buttonCaption === "Save" ? handleSave : handleEdit}>
        {buttonCaption}
      </button>
    </li>
  );
}
