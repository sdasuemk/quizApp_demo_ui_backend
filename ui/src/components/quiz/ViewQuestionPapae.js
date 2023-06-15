import React from 'react';

export const ViewQuestionPapae = ({ getquestions }) => {
  const questions = getquestions;
  return (
    <div>
      {questions.map((question, index) => (
        <div>
          <div>
            Question {index + 1}: {question.question}
          </div>
          <div>
            Options: {question.option1},{question.option2},{question.option3},
            {question.option4}
          </div>
          <div>Answer: {question.correctAnswer}</div>
        </div>
      ))}
    </div>
  );
};
