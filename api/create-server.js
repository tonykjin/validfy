const express = require('express');
const path = require('path');
const sessionMiddleware = require('./lib/session-middleware');

const createServer = ({ redis }) => {
  return express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(sessionMiddleware({ redis }));
};

module.exports = createServer;
