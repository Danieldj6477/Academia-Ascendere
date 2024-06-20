// src/utils/selectRandomQuestions.js
export const selectRandomQuestions = (questions, numberOfQuestions) => {
  if (!questions || !Array.isArray(questions)) {
    return [];
  }
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfQuestions);
};
