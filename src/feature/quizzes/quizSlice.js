import { createSlice } from "@reduxjs/toolkit";
import correctQuiz from "../../utils/correctQuiz";

const initialState = {
  selectedQuiz: [],
  quizSelectedCount: 0,
  quizMark: {
    totalQuiz: undefined,
    totalCorrect: undefined,
    totalWrong: undefined,
    totalMark: undefined,
    mark: 5,
  },
};
const searchId = (id, quiz) => {
  console.log(quiz.every((q) => q.id !== id));
  return;
};

const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    selectedQuiz: (state, action) => {
      if (state.selectedQuiz.every((quiz) => quiz.id !== action.payload.id)) {
        state.selectedQuiz.push(action.payload);
      }
    },
    addSelectedQuiz: (state, action) => {
      const { id, option, isSelect } = action.payload;
      const quizIndex = state.selectedQuiz.findIndex((quiz) => quiz.id === id);
      state.selectedQuiz[quizIndex].options = state.selectedQuiz[
        quizIndex
      ].options.map((op) => {
        if (op.id === option.id) {
          return {
            ...op,
            isSelected: isSelect,
          };
        } else {
          return op;
        }
      });
    },
    addSelectedCount: (state) => {
      state.quizSelectedCount = state.selectedQuiz.filter((quiz) => {
        const option = quiz?.options.filter((option) => option.isSelected);
        if (option?.length > 0) {
          return true;
        }
      }).length;
    },
    addQuizMark: (state) => {
      const findCorrect = state.selectedQuiz.filter((quiz) => {
        const isCorrect = quiz?.options.filter((option) => option.isCorrect);
        const isSelected = quiz?.options.filter((option) => option.isSelected);
        return correctQuiz(isCorrect, isSelected);
      }).length;
      const totalQuiz = state.selectedQuiz.length;
      state.quizMark.totalQuiz = totalQuiz;
      state.quizMark.totalCorrect = findCorrect;
      state.quizMark.totalWrong = totalQuiz - findCorrect;
      state.quizMark.totalMark = findCorrect * state.quizMark.mark;
    },
    clearQuizState: (state) => {
      state.quizSelectedCount = 0;
      state.selectedQuiz = [];
      state.quizMark = {
        totalQuiz: undefined,
        totalCorrect: undefined,
        totalWrong: undefined,
        totalMark: undefined,
        mark: 5,
      };
    },
  },
});

export default quizSlice.reducer;
export const {
  selectedQuiz,
  addSelectedQuiz,
  addSelectedCount,
  clearQuizState,
  addQuizMark,
} = quizSlice.actions;
