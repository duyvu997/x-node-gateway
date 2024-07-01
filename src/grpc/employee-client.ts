import * as esc from './__protobuf_generated__/proto/employee_grpc_pb.cjs';

import { credentials } from '@grpc/grpc-js';
import pkg from './__protobuf_generated__/proto/employee_pb.cjs';

const serverUrl = 'localhost:50051'; // Replace with your server URL

const client = new esc.EmployeeServiceClient(
  serverUrl,
  credentials.createInsecure()
);
const { GetEmployeeRequest, EmployeeResponse } = pkg;
// Function to fetch an employee by ID
async function fetchEmployeeById(
  employeeId: number
): Promise<any | null> {
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

    // Type assertion to EmployeeResponse
    const employeeResponse = response as any;
    const employeeObject = employeeResponse.toObject();

    console.log('Employee:', employeeObject);
    return employeeObject;
  } catch (error) {
    console.error('Error fetching employee:', error);
    // Handle error as needed (e.g., retry, log, etc.)
    return null;
  }
}

// // Example function to create a new employee
// async function createEmployee(name: string, email: string) {
//   const request = new CreateEmployeeRequest();
//   request.setName(name);
//   request.setEmail(email);

//   try {
//     const response = await new Promise((resolve, reject) => {
//       client.createEmployee(request, {}, (err, response) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(response.toObject());
//         }
//       });
//     });

//     console.log('Created Employee:', response);
//   } catch (error) {
//     console.error('Error creating employee:', error);
//     // Handle error as needed
//   }
// }

// // Example function to update an employee
// async function updateEmployee(id: number, name: string, email: string) {
//   const request = new UpdateEmployeeRequest();
//   request.setId(id);
//   request.setName(name);
//   request.setEmail(email);

//   try {
//     const response = await new Promise((resolve, reject) => {
//       client.updateEmployee(request, {}, (err, response) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(response.toObject());
//         }
//       });
//     });

//     console.log('Updated Employee:', response);
//   } catch (error) {
//     console.error('Error updating employee:', error);
//     // Handle error as needed
//   }
// }

// // Example function to delete an employee
// async function deleteEmployee(employeeId: number) {
//   const request = new DeleteEmployeeRequest();
//   request.setId(employeeId);

//   try {
//     const response = await new Promise((resolve, reject) => {
//       client.deleteEmployee(request, {}, (err, response) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(response.toObject());
//         }
//       });
//     });

//     console.log('Deleted Employee:', response);
//   } catch (error) {
//     console.error('Error deleting employee:', error);
//     // Handle error as needed
//   }
// }

// export { fetchEmployeeById, createEmployee, updateEmployee, deleteEmployee };
export { fetchEmployeeById };
