import React from "react";
import Option from "./Option";

export default function Quiz() {
  return (
    <div className="quiz">
      <h4 className="question">
        Quiz 2 - Which of the following is an example of a situation where you
        would use the Debounce function?
      </h4>
      <form className="quizOptions">
        <Option></Option>
        <Option></Option>
        <Option></Option>
        <Option></Option>
      </form>
    </div>
  );
}
