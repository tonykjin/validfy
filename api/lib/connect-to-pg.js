import Sequelize from 'sequelize';

const connectToDB = () => {
  const sequelize = new Sequelize(
    process.env.DB_DEV,
    process.env.DB_DEV_USERNAME,
    process.env.DB_DEV_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
    },
  );
  return sequelize;
};

export default connectToDB;
