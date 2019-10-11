/* eslint-disable no-console */
const createServer = require('./create-server');

const app = async () => {
  try {
    const server = await createServer();
    server.listen(process.env.PORT,() => console.log(`Server listening on port ${process.env.PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = app;
