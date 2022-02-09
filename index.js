const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, () => {
  console.log('Database connection successful!');
});

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to Homepage!!');
});

app.listen(8800, () => {
  console.log('Listening on port 8800!');
});
