import React from "react";
import QuizItems from "../../components/studentQuizes/QuizItems";

export default function Quiz() {
  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            Quizzes for "Debounce Function in JavaScript - JavaScript Job
            Interview question"
          </h1>
          <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
        </div>
        <QuizItems></QuizItems>
        <button className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">
          Submit
        </button>
      </div>
    </section>
  );
}
