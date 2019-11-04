const Router = require('express-promise-router');
const middleware = require('./middleware');

const authRouter = ({ db }) => {
  Router()
    .get('/auth/login', middleware.handleLogin)
    .delete('/auth/logout', middleware.handleLogout);
  return Router;
};

module.exports = authRouter;
