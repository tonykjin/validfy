const boom = require('@hapi/boom');

const errorHandler = (err, res) => {
  if (boom.isBoom(err)) {
    const { output: { statusCode, payload } } = err;
    res.status(statusCode).json(payload);
  } else {
    console.error(err);
    res.status(500).json({
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'An unexpected error occurred.',
    });
  }
};

module.exports = errorHandler;
