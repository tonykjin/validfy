/* eslint-disable no-console */
const createServer = require('./create-server');
const db = require('../models/index');
const getConnections = require('./lib/get-connections');

require('dotenv/config');

(async () => {
  try {
    const { sequelize, redis } = await getConnections();
    console.log('connections established');

    const server = await createServer({ db, redis });
    server.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));

    sequelize
      .authenticate()
      .then(() => console.log('DB Connection established'))
      .catch((err) => console.error('unable to connect to db: ', err));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
