const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const globalErrorHandler = require('./controllers/errors/errorController');
const commodityRouter = require('./routes/codes/commodityRouter');
const hsCodeRouter = require('./routes/codes/hsCodeRouter');
const shipCodeRouter = require('./routes/codes/shipCodeRouter');

const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// GENERAL CODES
// Commidity
app.use('/api/v1/commodities', commodityRouter);
// HS Code
app.use('/api/v1/hs-codes', hsCodeRouter);
// Ship Code
app.use('/api/v1/ship-codes', shipCodeRouter);

app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server`);

  err.status = 'fail';
  err.statusCode = 404;

  next(err);
});

app.use(globalErrorHandler);

module.exports = app;
