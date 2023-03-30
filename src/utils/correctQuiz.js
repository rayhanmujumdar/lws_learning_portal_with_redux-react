const correctQuiz = (isCorrect,isSelected) => {
    let value = false
    if(isCorrect.length === isSelected.length){
        isCorrect.forEach((correct,i) => {
            if(correct.id === isSelected[i].id){
                value =  true
            }else {
                value = false
            }
        })
    }
    return value
}
export default correctQuiz