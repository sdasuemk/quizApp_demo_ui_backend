const People = require('../schemas/models/People');
const jwt = require('jsonwebtoken');

const signin = async (req, res, next) => {
  try {
    const user = await People.findOne({ username: req.body.username });
    if (user) {
      if (
        user.password === req.body.password &&
        user.userType === req.body.userType
      ) {
        const token = jwt.sign(
          {
            userName: user.username,
            userId: user._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '1h',
          }
        );
        res.status(200).json({
          access_token: token,
          message: 'Login successful',
          userType: user.userType,
        });
        return;
      }
    }
  } catch (e) {
    res.status(500).send('Failed login!');
  } finally {
    next();
  }
};
module.exports = signin;
