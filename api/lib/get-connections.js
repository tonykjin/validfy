import connectToDB from './connect-to-pg';
import connectToRedis from './connect-to-redis';

const getConnections = async () => {
  const [sequelize, redis] = await Promise.all([
    connectToDB(),
    connectToRedis(),
  ]);
  return { sequelize, redis };
};

export default getConnections;
