const Result = require('../schemas/models/Result');
const postResult = async (req, res, next) => {
  try {
    const result = new Result({
      ...req.body,
      username: req.username,
    });
    const newResult = await result.save();
    res.status(201).json({ newResult, received: true });
  } catch (e) {
    res.status(500).send('Failed to create!');
  } finally {
    next();
  }
};
module.exports = postResult;
