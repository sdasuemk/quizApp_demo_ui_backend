const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const quizRouter = require('./routers/quizRouter');
const peopleRouter = require('./routers/peopleRouter');
const resultRouter = require('./routers/resultRouter');

// app object
const app = express();

// .env configuration
dotenv.config();

// mongoose connection
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect MongoDB:', error);
  }
}

connectToMongoDB();

// parse options
app.use(cors());
app.use(express.json());
app.use('/quiz', quizRouter);
app.use('/user', peopleRouter);
app.use('/result', resultRouter);

// listen
app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT);
});
