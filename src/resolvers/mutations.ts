import { AuthenticationError } from 'apollo-server-errors';
import { GraphQLError } from 'graphql';
import { MutationResolvers } from '../__generated__/resolvers-types';
import { authenticateUser } from '../repositories/user.repository.js';

const mutations: MutationResolvers = {
  addBook: async (_, { title, author }, { dataSources }) => {
    return dataSources.booksAPI.addBook({ title, author });
  },
  login: async (_, { username, password }, { req, res }) => {
    const token = await authenticateUser(username, password);
    if (!token) {
      throw new GraphQLError('Invalid username or password', {
        extensions: {
          code: 'Unauthorized',
          http: {
            status: 401,
          },
        },
      });
    }
    return { accessToken: token };
  },
};

export default mutations;
