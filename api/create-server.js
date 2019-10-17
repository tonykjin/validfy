const express = require('express');
const path = require('path');
const sessionMiddleware = require('./lib/session-middleware');
const auth = require('./auth-router/authenticate');

// routes
const handleLogin = require('./auth-router/index');

const createServer = ({ db, redis }) => {
  express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(sessionMiddleware({ redis }))
    .use(auth({ db }))
    .use(handleLogin({ db }));
  return express;
};

module.exports = createServer;
