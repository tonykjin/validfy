const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const argon2 = require('argon2');
const auth = require('./authenticate');

const newUser = ({ db }) => {
  async (req, res) => {
    const {
      email, phone, firstName, lastName, password,
    } = req.body;
    const hash = await argon2.hash(password);
    return db.Users.create({
      first_name: firstName,
      last_name: lastName,
      hashedPassword: hash,
      email,
      phone,
    }).then((response) => {
      res.status(200).send(response);
    });
  };
};

const handleLogin = () => {
  async (req, res) => {
    const userID = await auth.login(req.body);
    if (!userID) throw boom.unauthorized('Incorrect name or password.');
    const token = jwt.sign({ userID }, process.env.JWT_SECRET);
    await new Promise((resolve, reject) => {
      req.token = token;
      req.session.regenerate((err) => {
        if (err) return reject(err);
        req.session.user = { userID };
        return resolve();
      });
    });
    res.status(201).json({ userID });
  };
};

const handleLogout = async (req) => {
  if (!req.session.user) throw boom.notFound('Invalid Session.');
  await new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

module.exports = { newUser, handleLogin, handleLogout };
