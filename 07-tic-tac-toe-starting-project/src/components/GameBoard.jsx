export default function GameBoard({ onSquareSelected, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((symbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => onSquareSelected(rowIndex, colIndex)}
                      disabled={symbol}
                    >
                      {symbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
