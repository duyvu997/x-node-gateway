import { Employee, MutationResolvers } from '../__generated__/resolvers-types';
import { createEmployee, deleteEmployee, updateEmployee } from '../grpc/employee-client.js';

import { ApolloError } from 'apollo-server-errors';
import { GraphQLError } from 'graphql';
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

  createEmployee: async (_, { name, email }, { user }) => {
    try {
      // Validate input
      if (!name || !email) {
        throw new ApolloError('Name and email are required fields', '400');
      }

      // if (!user) {
      //   throw new GraphQLError('Unauthorized', {
      //     extensions: {
      //       code: 'Unauthorized',
      //       http: {
      //         status: 401,
      //       },
      //     },
      //   });
      // }

      // Attempt to create the employee
      const employee = await createEmployee(name, email);

      return {
        code: '200',
        success: true,
        message: 'Employee created successfully',
        employee: employee as Employee,
      };
    } catch (error) {
      return {
        code: '500',
        success: false,
        message:
          error.message || 'Internal server error. Please try again later.',
        employee: null,
      };
    }
  },

  updateEmployee: async (_, { id, name, email }, { user }) => {
    try {
      if (!id || !name || !email) {
        throw new ApolloError('ID, name, and email are required fields', '400');
      }

      const employee = await updateEmployee(+id, name, email);

      return {
        code: '200',
        success: true,
        message: 'Employee updated successfully',
        employee: employee as Employee,
      };
    } catch (error) {
      return {
        code: '500',
        success: false,
        message:
          error.message || 'Internal server error. Please try again later.',
        employee: null,
      };
    }
  },

  deleteEmployee: async (_, { id }, { user }) => {
    try {
      if (!id) {
        throw new ApolloError('ID is a required field', '400');
      }

      const success = await deleteEmployee(+id);

      return {
        code: '200',
        success: true,
        message: 'Employee deleted successfully',
      };
    } catch (error) {
      return {
        code: '500',
        success: false,
        message: error.message || 'Internal server error. Please try again later.',
      };
    }
  },
};

export default mutations;
