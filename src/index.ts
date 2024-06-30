import 'dotenv/config'; // Ensure this is at the top

import { ApolloServer } from '@apollo/server';
import { AppDataSource } from './data-source.js';
import { readFileSync } from 'fs';
import resolvers from './resolvers/index.js';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log('🚀 Data Source has been initialized!');

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`🚀 Server ready at: ${url}`);
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }
}

startServer();
