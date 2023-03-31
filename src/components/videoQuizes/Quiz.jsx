import React, { useEffect } from "react";
import Option from "./Option";
import {
  selectedQuiz,
  addSelectedQuiz,
  addSelectedCount,
  addQuizMark,
} from "../../feature/quizzes/quizSlice";
import { useDispatch } from "react-redux";

export default function Quiz({ quiz, count }) {
  const { id, question, options } = quiz;
  const dispatch = useDispatch();
  const handleResult = (e, option) => {
    const isSelected = e.target.checked;
    if (isSelected) {
      dispatch(addSelectedQuiz({ id, option, isSelect: true }));
    } else {
      dispatch(addSelectedQuiz({ id, option, isSelect: false }));
    }
    dispatch(addSelectedCount());
    dispatch(addQuizMark());
  };
  useEffect(() => {
    dispatch(selectedQuiz(quiz));
  }, [dispatch]);
  return (
    <div className="quiz">
      <h4 className="question">
        Quiz {count} - {question}
      </h4>
      <form className="quizOptions">
        {options.map((option, index) => (
          <Option
            quizId={id}
            handleResult={handleResult}
            optionId={index + 1}
            key={option?.id}
            option={option}
          ></Option>
        ))}
      </form>
    </div>
  );
}
