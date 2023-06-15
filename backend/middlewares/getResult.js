const Result = require('../schemas/models/Result');
const getResult = async (req, res, next) => {
  try {
    const result = await Result.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send('Failed to get!');
  } finally {
    next();
  }
};
module.exports = getResult;
