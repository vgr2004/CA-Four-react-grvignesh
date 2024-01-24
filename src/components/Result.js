import React, { useContext } from 'react';
import { marks } from './QuestionBox';

export default function Result() {
  const score = useContext(marks);

  const restart = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <h1>Final Score</h1>
      <h2>{score} / 5</h2>
      <h2>({((score / 5) * 100).toFixed(2)}%)</h2>
      <button onClick={restart} className='restart'>
        Restart
      </button>
    </div>
  );
}
