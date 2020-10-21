import React from "react";

function QuizContent(props) {
  return (
    <React.Fragment>
      <div className="Quiz">
        <h2>Quiz 1</h2>
        <h3>Question : {props.number} </h3>
        <p>{props.question}</p>
        <input type="checkbox" name="Angular" />
        <label>{props.answer1} </label>
        <input type="checkbox" name="flask" />
        <label>{props.answer2} </label>
        <input type="checkbox" name="vue" />
        <label>{props.answer3} </label>
        <input type="checkbox" name="django" />
        <label>{props.answer4} </label>
        <input type="checkbox" name="react" />
        <label>{props.answer5} </label>
      </div>

      <br />
    </React.Fragment>
  );
}
export default QuizContent;
