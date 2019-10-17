const argon2 = require('argon2');

const authenticateUser = ({ db }) => {
  const login = async (credentials) => {
    const { email, password } = credentials;
    const User = await db.Users.findAll({
      where: {
        email,
      },
      attributes: ['hashedPassword', 'id'],
    }).then((data) => data[0].dataValues);
    const { id, hashedPassword } = User;
    if (!id) return { id: null };
    if (!await argon2.verify(hashedPassword, password)) return { password: null };
    return { id };
  };
  return { login };
};

module.exports = authenticateUser;
