const express = require('express');
const peopleRouter = express.Router();
const signin = require('../middlewares/signin');

//login
peopleRouter.post('/login', signin);

module.exports = peopleRouter;
