import { GraphQLError } from 'graphql';
import { MutationResolvers } from '../__generated__/resolvers-types';
import { authenticateUser } from '../repositories/user.repository.js';

const mutations: MutationResolvers = {
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
