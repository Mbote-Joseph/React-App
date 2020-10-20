import React from "react";
import QuizContent from "./QuizContent";
function Quiz() {
  return (
    <React.Fragment>
      <QuizContent
        number="1"
        question="Which of the following frameworks/Library are created from JavaScript ?"
        answer1="Angular"
        answer2="flask"
        answer3="Vue"
        answer4="Django"
        answer5="React"
      />
      <QuizContent
        number="2"
        question="Which are the Languages used for designing a frontend of a website?"
        answer1="HTML"
        answer2="CSS"
        answer3="JavaScript"
        answer4="PHP"
        answer5="Bootstrap"
      />
      <QuizContent
        number="3"
        question="Which of the following frameworks/Library are created from Python ?"
        answer1="Angular"
        answer2="flask"
        answer3="Vue"
        answer4="Django"
        answer5="React"
      />
    </React.Fragment>
  );
}
export default Quiz;
