import React, { useState, useEffect } from "react";
import "./App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`body ${isDarkMode ? "darkMode" : "lightMode"}`}>
      <div className="header">
        <h1 className="title">React Quizz</h1>
        <button onClick={toggleMode} className="modeButton">
          {isDarkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
        </button>
      </div>
      <div className="questionBox">
        <QuestionBox questions={questions} />
      </div>
    </div>
  );
}

export default App;
