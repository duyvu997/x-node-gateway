import { Employee, QueryResolvers } from '../__graphql_generated__/resolvers-types.js';
import { fetchEmployeeById, listEmployees } from '../grpc/employee-client.js';

const queries: QueryResolvers = {
  employee: async (_, { id }) => {
    const employee = await fetchEmployeeById(+id);
    return {
      id: employee?.id.toString(),
      name: employee?.name,
      email: employee?.email,
    };
  },
  employees: async (
    _,
    { page, pageSize }: { page: number; pageSize: number }
  ) => {
    const response = (await listEmployees(page, pageSize)) as Employee[];

    return response;
  },
};

export default queries;
