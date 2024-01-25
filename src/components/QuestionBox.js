import React, { useState, useEffect, createContext } from 'react';
import questions from '../questions';
import Result from './Result';

export const marks = createContext();

export default function QuestionBox() {
  const [questionNo, setQuestionNo] = useState(1);
  let [count, setCount] = useState(1);
  const [score, setScore] = useState(0);
  const [highlight, setHighlight] = useState('not-highlighted');

   count = (item) => {
    setCount((prevCount) => prevCount + 1);
    setQuestionNo((prevQuestionNo) => prevQuestionNo + 1);
    if (item.isCorrect === true) {
      setScore((prevScore) => prevScore + 1);
      console.log(questionNo);
    }
  };

  const removeHighlight = () => {
    setHighlight('not-highlighted');
  };

  const highlights = () => {
    setHighlight('highlighted');
  };

  useEffect(() => {
    console.log(questionNo);
  }, [questionNo]);

  return (
    <>
      {questionNo !== 6 ? (
        <>
          <h1 className="question-number">Question : {questionNo} / 5</h1>
          <h2 className={`question-text ${highlight}`}>{questions[questionNo - 1].text}</h2>
          <div className='options-container'>
            {questions[questionNo - 1].options.map((item) => (
              <div className='option' key={item.id} onClick={() => count(item)}>
                {item.text}
              </div>
            ))}
          </div>
          <div className='highlight-box'>
            <button onClick={highlights} className='highlight-btn'>Highlight</button>
            <button onClick={removeHighlight} className='remove-highlight-btn'>Remove highlight</button>
          </div>
        </>
      ) : (
        <>
          <marks.Provider value={score}>
            <Result />
          </marks.Provider>
        </>
      )}
    </>
  );
}
