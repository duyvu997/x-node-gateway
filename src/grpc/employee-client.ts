import * as grpc from '@grpc/grpc-js';

import {
  CreateEmployeeRequest,
  DeleteEmployeeRequest,
  GetEmployeeRequest,
  UpdateEmployeeRequest,
} from './__protobuf_generated__/employee_pb.js';
import { credentials, loadPackageDefinition } from '@grpc/grpc-js';

import { EmployeeServiceClient } from './__protobuf_generated__/employee_grpc_pb.js';

// Define your gRPC server endpoint URL
const serverUrl = 'http://localhost:8080'; // Replace with your server URL

// Create a gRPC client instance
const client = new EmployeeServiceClient(
  serverUrl,
  credentials.createInsecure()
);

// Function to fetch an employee by ID
async function fetchEmployeeById(employeeId: number) {
  const request = new GetEmployeeRequest();
  request.setId(employeeId);

  try {
    const response = await new Promise((resolve, reject) => {
      client.getEmployee(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });

    console.log('Employee:', response);
  } catch (error) {
    console.error('Error fetching employee:', error);
    // Handle error as needed (e.g., retry, log, etc.)
  }
}

// Example function to create a new employee
async function createEmployee(name: string, email: string) {
  const request = new CreateEmployeeRequest();
  request.setName(name);
  request.setEmail(email);

  try {
    const response = await new Promise((resolve, reject) => {
      client.createEmployee(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });

    console.log('Created Employee:', response);
  } catch (error) {
    console.error('Error creating employee:', error);
    // Handle error as needed
  }
}

// Example function to update an employee
async function updateEmployee(id: number, name: string, email: string) {
  const request = new UpdateEmployeeRequest();
  request.setId(id);
  request.setName(name);
  request.setEmail(email);

  try {
    const response = await new Promise((resolve, reject) => {
      client.updateEmployee(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.toObject());
        }
      });
    });

    console.log('Updated Employee:', response);
  } catch (error) {
    console.error('Error updating employee:', error);
    // Handle error as needed
  }
}

// Example function to delete an employee
async function deleteEmployee(employeeId: number) {
  const request = new DeleteEmployeeRequest();
  request.setId(employeeId);

  try {
    const response = await new Promise((resolve, reject) => {
      client.deleteEmployee(request, {}, (err, response) => {
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
    // Handle error as needed
  }
}

export { fetchEmployeeById, createEmployee, updateEmployee, deleteEmployee };