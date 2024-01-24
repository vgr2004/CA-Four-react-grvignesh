import React, { useState, useEffect } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    const lightModeColors = { backgroundColor: "#6066FF", textColor: "#FFFFFF" };
    const darkModeColors = { backgroundColor: "#000000", textColor: "#FFFFFF" };

    setBackgroundColor(isDarkMode ? darkModeColors.backgroundColor : lightModeColors.backgroundColor);
    setTextColor(isDarkMode ? darkModeColors.textColor : lightModeColors.textColor);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ background: backgroundColor, color: textColor }} className="body">
      <div className="header">
        <h1>React quizz</h1>
        <button onClick={toggleMode} className={`modeButton ${isDarkMode ? 'dark' : 'light'}`}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="questionBox">
        <QuestionBox />
      </div>
    </div>
  );
}

export default App;
