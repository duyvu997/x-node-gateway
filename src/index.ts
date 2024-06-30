// src/server.ts
import 'dotenv/config';

import { UserInterface, getUser } from './repositories/user.repository.js';

import { ApolloServer } from '@apollo/server';
import { AppDataSource } from './datasource/index.js';
import { AuthenticationError } from 'apollo-server-errors';
import { readFileSync } from 'fs';
import resolvers from './resolvers/index.js';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });
interface AppContext {
  user: UserInterface;
}

const server = new ApolloServer<AppContext>({
  typeDefs,
  resolvers,
  formatError: (err) => {console.log(err);
    
    if (err instanceof AuthenticationError) {
      return new AuthenticationError('Authentication error');
    }
    return err;
  },
});

async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log('🚀 Data Source has been initialized!');

    const { url } = await startStandaloneServer(server, {
      context: async ({ req, res }) => {
        const token = req.headers.authorization || '';
        const user = await getUser(token);
        return { user, req, res };
      },

      listen: { port: 4000 },
    });

    console.log(`🚀 Server ready at: ${url}`);
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }
}

startServer();
