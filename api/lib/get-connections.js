const connectToDB = require('./connect-to-pg');

const getConnections = async () => {
  const [sequelize] = await Promise.all([
    connectToDB(),
  ]);
  return { sequelize };
};

module.exports = getConnections;
