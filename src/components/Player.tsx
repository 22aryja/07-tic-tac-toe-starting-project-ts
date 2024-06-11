import React from "react";
import { useState } from "react";

type PlayerProps = {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, playerName: string) => void;
};

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}: PlayerProps) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(): void {
    setIsEditing((editing: boolean) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event: any): void {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
