const Router = require('express-promise-router');
const middleware = require('./middleware');

const usersRouter = ({ db }) => {
  Router()
    .post('/new/user', middleware.newUser({ db }));
  return Router;
};

module.exports = usersRouter;
