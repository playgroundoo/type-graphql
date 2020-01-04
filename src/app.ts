import express from 'express';
import cors from 'cors';

export default () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res, next) => {
    res.status(200).send('type-graphql');
  });

  return app;
}