import { createConnection } from 'typeorm';
import * as entities from '../entities';

export default () =>
  createConnection({
    type: 'mysql',
    port: parseInt(process.env.DB_PORT),
    entityPrefix: 'blog_',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USER,
    entities: [
      entities.Project,
      entities.Image,
      entities.ImageSource
    ],
    synchronize: true,
    // logging: true
  })