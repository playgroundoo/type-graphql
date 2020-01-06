import 'dotenv/config';
import 'reflect-metadata';
import { initRepository } from './initiators';
import getResolvers from './resolvers';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';


(async () => {
  initRepository();

  const resolvers = getResolvers();
  const schema = await buildSchema({ resolvers });
  const server = new ApolloServer({ schema, playground: true });

  server.listen(3000).then(() => {
    console.log('apollo');
  });
})();