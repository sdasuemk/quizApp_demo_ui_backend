import React, { useState } from 'react';
import { postQuiz } from '../api';
import { ViewQuestionPapae } from './ViewQuestionPapae';

const SetQuiz = ({ getquestions, setRefresh }) => {
  const [question, setQuestion] = useState({});

  const handleChange = (e) => {
    setQuestion((v) => ({
      ...v,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postQuiz(question);
    setRefresh(true);
  };

  return (
    <div>
      <div>Setup Question Paper</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input
            type="text"
            id="question"
            name="question"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Option 1:</label>
          <input
            type="text"
            id="option1"
            name="option1"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Option 2:</label>
          <input
            type="text"
            id="option2"
            name="option2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Option 3:</label>
          <input
            type="text"
            id="option3"
            name="option3"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Option 4:</label>
          <input
            type="text"
            id="option4"
            name="option4"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Correct Answer:</label>
          <input
            type="text"
            id="correctAnswer"
            name="correctAnswer"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ViewQuestionPapae getquestions={getquestions} />
    </div>
  );
};

export default SetQuiz;
