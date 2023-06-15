import React, { useEffect, useState } from 'react';
import { updateResult } from '../api';

const StudentAssignment = ({ questions }) => {
  const [answers, setAnswers] = useState([]);
  const [usersAnswer, setUsersAnswer] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] =
      questions[questionIndex][`option${optionIndex + 1}`];
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submission = questions.map((question, index) => ({
        questionId: question._id,
        answer: answers[index],
      }));
      setUsersAnswer(submission);

      let correct = 0;
      let wrong = 0;
      submission.forEach((item, index) => {
        if (item.answer === questions[index].correctAnswer) {
          correct++;
        } else {
          wrong++;
        }
      });
      setCorrectCount(correct);
      setWrongCount(wrong);
      await updateResult({
        correct: correct,
        wrong: wrong,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setAnswers(Array(questions.length).fill(null));
  }, [questions]);

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <ul>
            <li>
              <input
                type="radio"
                name={`question_${question._id}`}
                checked={answers[index] === question.option1} // Check against option value
                onChange={() => handleOptionSelect(index, 0)}
              />
              <label>{question.option1}</label>
            </li>
            <li>
              <input
                type="radio"
                name={`question_${question._id}`}
                checked={answers[index] === question.option2} // Check against option value
                onChange={() => handleOptionSelect(index, 1)}
              />
              <label>{question.option2}</label>
            </li>
            <li>
              <input
                type="radio"
                name={`question_${question._id}`}
                checked={answers[index] === question.option3} // Check against option value
                onChange={() => handleOptionSelect(index, 2)}
              />
              <label>{question.option3}</label>
            </li>
            <li>
              <input
                type="radio"
                name={`question_${question._id}`}
                checked={answers[index] === question.option4} // Check against option value
                onChange={() => handleOptionSelect(index, 3)}
              />
              <label>{question.option4}</label>
            </li>
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {usersAnswer.length > 0 && (
        <div>
          <p>Number of correct answers: {correctCount}</p>
          <p>Number of wrong answers: {wrongCount}</p>
        </div>
      )}
    </div>
  );
};

export default StudentAssignment;
