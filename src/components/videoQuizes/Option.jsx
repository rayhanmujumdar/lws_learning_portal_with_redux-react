import React from "react";
import { useDispatch } from "react-redux";


export default function Option({ option, quizId, optionId,handleResult }) {
  ;
  return (
    <label htmlFor={`option${optionId}_q${quizId}`}>
      <input
        onChange={(e) => handleResult(e,option)}
        type="checkbox"
        id={`option${optionId}_q${quizId}`}
      />
      {option?.option}
    </label>
  );
}
