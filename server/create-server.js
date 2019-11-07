import express from 'express';
import path from 'path';
// import sessionMiddleware from '../api/lib/session-middleware';

const createServer = ({ db, redis }) => {
  return express()
    .use(express.static(path.join(__dirname, 'public')));
  // .use(sessionMiddleware({ redis }));
};

export default createServer;
