import React, { useEffect, useState } from "react";
import Error from "../ui/error/Error";
import TextInput from "../ui/TextInput";
import { useAddQuizMutation } from "../../feature/quizzes/quizApi";
import { useGetVideosQuery } from "../../feature/videos/videosApi";

const maxId = (options) => {
  return options.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1;
};

export default function AddQuizForm({ control }) {
  const [addQuiz, { isLoading, isSuccess, isError }] = useAddQuizMutation();
  const { data: videos } = useGetVideosQuery();
  const [question, setQuestion] = useState("");
  const [videoId, setVideoId] = useState(null);
  const [error, setError] = useState("");
  const [options, setOptions] = useState([
    {
      id: 1,
      option: "",
      isCorrect: false,
    },
  ]);
  const handleOptionChange = (e, option) => {
    setOptions((options) => {
      return options.map((op) => {
        if (op.id === option.id) {
          return {
            ...op,
            option: e.target.value,
          };
        } else {
          return op;
        }
      });
    });
  };
  const handleChecked = (e, option) => {
    setOptions((options) => {
      return options.map((op) => {
        if (op.id === option.id) {
          return {
            ...op,
            isCorrect: e.target.checked,
          };
        } else {
          return op;
        }
      });
    });
  };
  const handleAddOption = () => {
    setOptions((options) => {
      if (options.length < 4) {
        return [
          ...options,
          {
            id: maxId(options),
            option: "",
            isCorrect: false,
          },
        ];
      } else {
        return options;
      }
    });
  };
  const handleDeleteOption = (id) => {
    setOptions((options) => {
      return options.filter((option) => option.id !== id);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let correctAnswerSelectCount = 0;
    options.forEach((option) => {
      if (option.isCorrect) {
        correctAnswerSelectCount += 1;
      }
    });
    const { title, id } = videos.find((video) => video.id == videoId);
    if (correctAnswerSelectCount > 0 && options.length > 1) {
      setError("");
      addQuiz({
        question,
        video_id: id,
        video_title: title,
        options,
      });
    } else if (correctAnswerSelectCount === 0) {
      setError("Answer not selected");
    } else {
      setError("Must be two options added");
    }
  };
  useEffect(() => {
    if (isSuccess) {
      control(false);
    }
  }, [isSuccess]);
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl text-center">Add Video</h1>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <TextInput
                required
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
                title="Question"
                placeholder="Write A Question"
              />
            </div>
            <div className="col-span-6">
              <label
                className="block text-sm font-medium text-gray-300"
                htmlFor="videoTitle"
              >
                Video title
              </label>
              <select
                onChange={(e) => setVideoId(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block text-lg pl-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 text-gray-600"
                name="videoTitle"
                required
              >
                <option value="" hidden>
                  {videos?.length > 0
                    ? "choose video title which video add to quiz?"
                    : "All video assignments was already added"}
                </option>
                {videos?.map((video) => (
                  <option key={video?.id} value={video?.id}>
                    {video?.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-6">
              {options.map((option, index) => (
                <div key={option.id} className="relative">
                  <TextInput
                    required
                    onChange={(e) => handleOptionChange(e, option)}
                    value={option.option}
                    title={
                      <span className="font-bold">Option - {index + 1}</span>
                    }
                    placeholder="Write A quiz option"
                  />
                  <div className="absolute right-2 top-7">
                    <svg
                      onClick={() => handleDeleteOption(option.id)}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-red-600 hover:text-red-500 cursor-pointer transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                  <label className="cursor-pointer label justify-start gap-x-2">
                    <span className="label-text">
                      {option.isCorrect
                        ? "That is Correct Answer"
                        : "Is It Correct"}
                    </span>
                    <input
                      value={`option${option.id}`}
                      name={`option${option.id}`}
                      onChange={(e) => handleChecked(e, option)}
                      type="checkbox"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-6">
            <button
              onClick={handleAddOption}
              className="bg-green-300 text-black px-2 py-1 rounded-md hover:bg-green-500 font-semibold"
            >
              Add New Option
            </button>
          </div>
        </div>
        <div className="px-4 py-3 flex justify-between bg-[#080E1B] text-right sm:px-6">
          <button
            onClick={() => control(false)}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-green-500"
          >
            Save
          </button>
        </div>
      </div>
      {isError && <Error message="There was an error"></Error>}
      {error && <Error message={error}></Error>}
    </form>
  );
}
