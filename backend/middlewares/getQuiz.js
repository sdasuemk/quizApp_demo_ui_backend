const Quiz = require('../schemas/models/Quiz');
const getQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.find();
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).send('Failed to get!');
  } finally {
    next();
  }
};
module.exports = getQuiz;
