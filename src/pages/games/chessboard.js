// pages/games/chessboard.js
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Chess } from 'chess.js';  // Update the import here

const ChessboardWithNoSSR = dynamic(() => import('chessboardjsx'), {
  ssr: false,
});

const ChessboardPage = () => {
  const [fen, setFen] = useState('start');
  const [game, setGame] = useState(new Chess());

  const onDrop = ({ sourceSquare, targetSquare }) => {
    let move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for simplicity
    });

    if (move === null) return;

    setFen(game.fen());
  };

  const onReset = () => {
    game.reset();
    setFen('start');
  };

  useEffect(() => {
    // You can perform additional setup that needs the window object here
  }, []); // empty dependency array to run only once on mount

  return (
    <div>
      <ChessboardWithNoSSR position={fen} onDrop={onDrop} />
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ChessboardPage;
