const correctQuiz = (isCorrect, isSelected) => {
  let value = false;
  if (isCorrect.length === isSelected.length) {
    isCorrect.forEach((correct, index) => {
      if (correct.id === isSelected[index].id) {
        value = true;
      } else {
        value = false;
      }
    });
  }
  return value;
};
export default correctQuiz;
