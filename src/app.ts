import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { initRepository } from './Initiators';

export default () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  initRepository();

  app.get('/', (req, res, next) => {
    res.status(200).send('type-graphql');
  });

  return app;
}