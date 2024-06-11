import React from "react";

export default function Log({ turns }:any) {
  return (
    <ol id="log">
      {turns.map((turn : any) => (
        <li key={`${turn.square.row}${turn.square.column}`}>
          {turn.player} selected {turn.square.row},{turn.square.column}
        </li>
      ))}
    </ol>
  );
}
