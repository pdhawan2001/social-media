const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, () => {
  console.log('Database connection successful!');
});

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  res.send('Welcome to Homepage!!');
});

app.get('/users', (req, res) => {
  console.log('Welcome to users page!!');
})

app.listen(8800, () => {
  console.log('Listening on port 8800!');
});
