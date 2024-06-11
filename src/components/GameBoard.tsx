import React from "react";

type GameBoardProps = {
  onSelectSquare: (rowIndex: number, columnIndex: number) => void;
  board: any[];
};

export default function GameBoard({ onSelectSquare, board }: GameBoardProps) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol: boolean, columnIndex: number) => (
              <div key={columnIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, columnIndex)}
                  disabled={playerSymbol} // or disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </div>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
