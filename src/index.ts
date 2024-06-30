import 'reflect-metadata';

import { authenticateToken, generateToken } from './auth.js';

import { ApolloServer } from 'apollo-server';
import { Employee } from './entity/Employee.js';
import { User } from './entity/User.js';
import bodyParser from 'body-parser';
import { buildSchema } from 'graphql';
import { createConnection } from 'typeorm';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import ormconfig from './typeorm.config.js';
import { resolvers } from './resolvers.js';
import { typeDefs } from './typeDefs.js';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

createConnection(ormconfig)
  .then(async (connection) => {
    const app = express();
    app.use(bodyParser.json());

    // Dummy user data for example
    const users = [{ id: 1, username: 'test', password: 'password' }];

    app.post('/login', async (req, res) => {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username, password } });

      if (user) {
        const token = generateToken({ id: user.id, username: user.username });
        res.json({ token });
      } else {
        res.status(401).send('Username or password incorrect');
      }
    });

    // Define your GraphQL schema for unsecured and secured routes
    const unsecuredSchema = buildSchema(`
    type Query {
      hello: String
    }
  `);

    const securedSchema = buildSchema(`
    type Query {
      employees: [Employee]
      employee(id: Int!): Employee
    }

    type Mutation {
      createEmployee(name: String!, position: String!, salary: Int!): Employee
      updateEmployee(id: Int!, name: String, position: String, salary: Int): Employee
      deleteEmployee(id: Int!): String
    }

    type Employee {
      id: Int
      name: String
      position: String
      salary: Int
    }
  `);

    // Define your resolvers
    const unsecuredRoot = {
      hello: () => 'Hello world!',
    };

    const securedRoot = {
      employees: async () => {
        return await Employee.find();
      },
      employee: async ({ id }: { id: number }) => {
        return await Employee.findOne({ where: { id } });
      },
      createEmployee: async ({
        name,
        position,
        salary,
      }: {
        name: string;
        position: string;
        salary: number;
      }) => {
        const employee = Employee.create({ name, position, salary });
        await employee.save();
        return employee;
      },
      updateEmployee: async ({
        id,
        name,
        position,
        salary,
      }: {
        id: number;
        name?: string;
        position?: string;
        salary?: number;
      }) => {
        const employee = await Employee.findOne({ where: { id } });
        if (employee) {
          if (name) employee.name = name;
          if (position) employee.position = position;
          if (salary) employee.salary = salary;
          await employee.save();
        }
        return employee;
      },
      deleteEmployee: async ({ id }: { id: number }) => {
        const result = await Employee.delete(id);
        return result.affected
          ? `Employee with id ${id} deleted`
          : `Employee with id ${id} not found`;
      },
    };

    // Public route
    app.use(
      '/graphql',
      graphqlHTTP({
        schema: unsecuredSchema,
        rootValue: unsecuredRoot,
        graphiql: true,
      })
    );

    // Protected route
    app.use(
      '/secure-graphql',
      authenticateToken,
      graphqlHTTP((req) => ({
        schema: securedSchema,
        rootValue: securedRoot,
        context: { user: (req as any).user },
        graphiql: true,
      }))
    );

    // Start the server
    app.listen(3000, () => {
      console.log(
        'Running a GraphQL API server at http://localhost:3000/graphql'
      );
      console.log(
        'Secure GraphQL API server at http://localhost:3000/secure-graphql'
      );
    });
  })
  .catch((error) => console.log(error));
