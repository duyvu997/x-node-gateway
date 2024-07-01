import { QueryResolvers } from '../__generated__/resolvers-types.js';
import { fetchEmployeeById } from '../grpc/employee-client.js';

const queries: QueryResolvers = {
  employee: async (_, {id}) => {
    const employee = await fetchEmployeeById(+id);
    return {
      id: employee?.id.toString(),
      name: employee?.name,
      email: employee?.email,
    };
  },
};

export default queries;