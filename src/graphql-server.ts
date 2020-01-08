import 'dotenv/config';
import 'reflect-metadata';
import { initRepository, initDataLoader } from './initiators';
import getResolvers from './resolvers';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';


(async () => {
  initRepository();

  const schema = await buildSchema({ 
    resolvers: getResolvers(),
    globalMiddlewares: [ initDataLoader ]
  });
  const server = new ApolloServer({ schema, playground: true });

  await server.listen(3000);
})();