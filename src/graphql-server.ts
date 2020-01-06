import 'dotenv/config';
import 'reflect-metadata';
import { initRepository } from './initiators';
import getResolvers from './resolvers';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';


(async () => {
  initRepository();

  const schema = await buildSchema({ resolvers: getResolvers() });
  const server = new ApolloServer({ schema, playground: true });

  await server.listen(3000);
  console.log('apollo');
  
})();