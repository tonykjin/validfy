const connectToDB = require('./connect-to-pg');
const connectToRedis = require('./connect-to-redis');

const getConnections = async () => {
  const [sequelize, redis] = await Promise.all([
    connectToDB(),
    connectToRedis(),
  ]);
  return { sequelize, redis };
};

module.exports = getConnections;
