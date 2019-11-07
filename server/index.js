/* eslint no-console: 0 */
import createServer from './create-server';
import getConnections from '../api/lib/get-connections';
import db from '../database/models/index';

require('dotenv/config');

(async () => {
  try {
    const { sequelize, redis } = await getConnections();
    console.log('Connections established');

    sequelize
      .authenticate()
      .then(() => console.log('DB connected'))
      .catch((err) => console.error('Unable to connect to db', err));

    const server = await createServer({ db, redis });
    server.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
