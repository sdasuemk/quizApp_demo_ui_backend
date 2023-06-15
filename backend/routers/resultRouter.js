const express = require('express');
const resultRouter = express.Router();
const getResult = require('../middlewares/getResult');
const postResult = require('../middlewares/postResult');
const authGuard = require('../middlewares/common/access');

//get result
resultRouter.get('/results', getResult);
resultRouter.post('/update-results', authGuard, postResult);

module.exports = resultRouter;
