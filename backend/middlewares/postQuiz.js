const Quiz = require('../schemas/models/Quiz');
const postQuiz = async (req, res, next) => {
  try {
    const quiz = new Quiz({
      ...req.body, // input questions
    });
    const newQuiz = await quiz.save();
    res.status(201).json({ newQuiz, received: true });
  } catch (e) {
    res.status(500).send('Failed to create!');
  } finally {
    next();
  }
};
module.exports = postQuiz;
