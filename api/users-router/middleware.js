const argon2 = require('argon2');

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

module.exports = { newUser };
