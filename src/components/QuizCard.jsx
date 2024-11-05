import React, { useState } from "react";
import "./QuizCard.css";

function QuizCard({ arr, onChanging }) {
  let [index, setIndex] = useState(0);
  let [selected, setSelected] = useState("");
  let [score, setScore] = useState(0);
  let [warning, setWarning] = useState("");

  function changingState(e) {
    setSelected(e.target.value);
    setWarning("");
  }

  const progress = () => {
    if (selected === "") {
      setWarning("Please select an option !!!");
    } else {
      if (index >= arr.length - 1) {
        if (selected === arr[index].correct) {
          setScore(score + 1);
        }
        onChanging(score + (selected === arr[index].correct ? 1 : 0));
      } else {
        if (selected === arr[index].correct) {
          setScore(score + 1);
        }
        setIndex(index + 1);
        setSelected("");
      }
    }
  };
  return (
    <div className="QuizCard">
      <div>
        <h2>Question {index + 1}</h2>
      </div>
      <div>{arr[index].question}</div>
      <div className="optionsContainer">
        {["a", "b", "c", "d"].map((options) => (
          <label className="label" key={options}>
            <input
              type="radio"
              name={`question ${index + 1}`}
              value={options}
              checked={selected === options}
              onChange={changingState}
            />
            {arr[index][options]}
          </label>
        ))}
      </div>
      <div className="warningMessage">{warning}</div>
      <div>
        <button onClick={progress}>Submit</button>
      </div>
    </div>
  );
}

export default QuizCard;
