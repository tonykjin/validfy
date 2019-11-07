import { session } from 'express-sessions';
import { sessionStore } from 'connect-redis';

const sessionMiddleware = ({ redis }) => {
  const RedisStore = sessionStore(session);

  return session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      client: redis,
      ttl: +process.env.SESSION_EXPIRY,
    }),
    cookie: {
      maxAge: +process.env.SESSION_EXPIRY,
      secure: process.env.NODE_ENV === 'production',
    },
  });
};

export default sessionMiddleware;
