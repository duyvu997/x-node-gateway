import * as EmployeeServiceClient from './__protobuf_generated__/proto/employee_grpc_pb.cjs';

import { credentials } from '@grpc/grpc-js';
import pkg from './__protobuf_generated__/proto/employee_pb.cjs';

const serverUrl = 'nestjs-app:50051';  // Service name defined in docker-compose.yml

const client = new EmployeeServiceClient.EmployeeServiceClient(
  serverUrl,
  credentials.createInsecure()
);

const {
  GetEmployeeRequest,
  CreateEmployeeRequest,
  UpdateEmployeeRequest,
  DeleteEmployeeRequest,
  GetEmployeesRequest,
} = pkg;

async function fetchEmployeeById(employeeId: number): Promise<any | null> {
  const request = new GetEmployeeRequest();
  request.setId(employeeId);

  try {
    const response = await new Promise((resolve, reject) => {
      client.getEmployee(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });

    const employeeResponse = response as any;
    const employeeObject = employeeResponse.toObject();

    return employeeObject;
  } catch (error) {
    console.error('Error fetching employee:', error);
    return null;
  }
}

async function createEmployee(name: string, email: string) {
  const request = new CreateEmployeeRequest();
  request.setName(name);
  request.setEmail(email);

  try {
    const response = await new Promise((resolve, reject) => {
      client.createEmployee(request, {} as any, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });

    console.log('Created Employee:', response);
    return response;
  } catch (error) {
    console.error('Error creating employee:', error);
  }
}

async function updateEmployee(id: number, name: string, email: string) {
  const request = new UpdateEmployeeRequest();
  request.setId(id);
  request.setName(name);
  request.setEmail(email);

  try {
    const response = await new Promise((resolve, reject) => {
      client.updateEmployee(request, {} as any, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });

    console.log('Updated Employee:', response);
    return response;
  } catch (error) {
    console.error('Error updating employee:', error);
  }
}

async function deleteEmployee(employeeId: number) {
  const request = new DeleteEmployeeRequest();
  request.setId(employeeId);

  try {
    const response = await new Promise((resolve, reject) => {
      client.deleteEmployee(request, {} as any, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });

    console.log('Deleted Employee:', response);
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
}

async function listEmployees(page: number, pageSize: number) {
  const request = new GetEmployeesRequest();
  request.setPage(page);
  request.setPagesize(pageSize);

  try {
    const response = await new Promise((resolve, reject) => {
      client.getEmployees(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject().employeesList);
        }
      });
    });

    return response;
  } catch (error) {
    console.error('Error listing employees:', error);
    return [];
  }
}

export {
  fetchEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  listEmployees,
};
