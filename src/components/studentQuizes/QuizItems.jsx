import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAddQuizMarkMutation } from "../../feature/quizMark/quizMarkAPi";
import {
  useGetRelatedQuizQuery,
  useUpdateQuizSubmitMutation,
} from "../../feature/quizzes/quizApi";
import Loading from "../ui/loader/Loading";
import Error from "../ui/error/Error";
import Quiz from "./Quiz";
import { selectAuthUser } from "../../feature/auth/authSelector";

export default function QuizItems() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { name: student_name, id: student_id } = useSelector(selectAuthUser);
  const { data: quizzes, isLoading, isError } = useGetRelatedQuizQuery(quizId);
  const [addQuizMark, { isSuccess, isLoading: addQuizLoading }] =
    useAddQuizMarkMutation();
  const [updateQuizSubmit] = useUpdateQuizSubmitMutation();
  const { quizSelectedCount, quizMark } = useSelector((state) => state.quiz);
  let content = null;
  if (isLoading) {
    content = <Loading></Loading>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error"></Error>;
  }

  if (!isLoading && !isError && quizzes?.length === 0) {
    content = <Error message="Quiz not found"></Error>;
  }

  if (!isLoading && !isError && quizzes?.length > 0) {
    content = quizzes.map((quiz, index) => (
      <Quiz key={quiz.id} count={index + 1} quiz={quiz}></Quiz>
    ));
  }
  useEffect(() => {
    if (isSuccess) {
      quizzes.forEach((quiz) => {
        updateQuizSubmit({
          id: quiz.id,
          data: { ...quiz, isSubmit: true },
          videoId: quizzes[0].video_id,
        });
      });
      navigate(`/student/course-player/${quizzes[0].video_id}`);
    }
  }, [isSuccess]);
  // handle quiz submit
  const handleSubmitQuiz = () => {
    if (quizzes?.length === quizSelectedCount) {
      addQuizMark({
        student_id,
        student_name,
        video_id: quizzes[0].video_id,
        video_title: quizzes[0].video_title,
        ...quizMark,
      });
    }
  };
  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          {quizzes?.length > 0 && quizzes[0].video_title}
        </h1>
        <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
        <div className="space-y-8 ">{content}</div>
      </div>
      {quizzes?.length > 0 && !quizzes[0].isSubmit ? (
        <button
          disabled={quizSelectedCount !== quizzes?.length || addQuizLoading}
          onClick={handleSubmitQuiz}
          className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 "
        >
          Submit
        </button>
      ) : (
        <div className="flex justify-center items-center">
          <Error message="Quiz already submitted"></Error>
        </div>
      )}
    </div>
  );
}
