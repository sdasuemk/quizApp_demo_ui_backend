const express = require('express');
const quizRouter = express.Router();
const postQuiz = require('../middlewares/postQuiz');
const getQuiz = require('../middlewares/getQuiz');

// get quiz
quizRouter.get('/get-quiz', getQuiz);
//post quiz
quizRouter.post('/create-quiz', postQuiz);

module.exports = quizRouter;
