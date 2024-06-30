// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ./src/grpc/employee/proto/employee.proto
//
'use strict';
var grpc = require('grpc');
var employee_pb = require('./employee_pb.js');

function serialize_employees_CreateEmployeeRequest(arg) {
  if (!(arg instanceof employee_pb.CreateEmployeeRequest)) {
    throw new Error('Expected argument of type employees.CreateEmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employees_CreateEmployeeRequest(buffer_arg) {
  return employee_pb.CreateEmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employees_DeleteEmployeeRequest(arg) {
  if (!(arg instanceof employee_pb.DeleteEmployeeRequest)) {
    throw new Error('Expected argument of type employees.DeleteEmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employees_DeleteEmployeeRequest(buffer_arg) {
  return employee_pb.DeleteEmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employees_DeleteEmployeeResponse(arg) {
  if (!(arg instanceof employee_pb.DeleteEmployeeResponse)) {
    throw new Error('Expected argument of type employees.DeleteEmployeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employees_DeleteEmployeeResponse(buffer_arg) {
  return employee_pb.DeleteEmployeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employees_EmployeeResponse(arg) {
  if (!(arg instanceof employee_pb.EmployeeResponse)) {
    throw new Error('Expected argument of type employees.EmployeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employees_EmployeeResponse(buffer_arg) {
  return employee_pb.EmployeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employees_GetEmployeeRequest(arg) {
  if (!(arg instanceof employee_pb.GetEmployeeRequest)) {
    throw new Error('Expected argument of type employees.GetEmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employees_GetEmployeeRequest(buffer_arg) {
  return employee_pb.GetEmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employees_UpdateEmployeeRequest(arg) {
  if (!(arg instanceof employee_pb.UpdateEmployeeRequest)) {
    throw new Error('Expected argument of type employees.UpdateEmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employees_UpdateEmployeeRequest(buffer_arg) {
  return employee_pb.UpdateEmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EmployeeServiceService = exports.EmployeeServiceService = {
  getEmployee: {
    path: '/employees.EmployeeService/GetEmployee',
    requestStream: false,
    responseStream: false,
    requestType: employee_pb.GetEmployeeRequest,
    responseType: employee_pb.EmployeeResponse,
    requestSerialize: serialize_employees_GetEmployeeRequest,
    requestDeserialize: deserialize_employees_GetEmployeeRequest,
    responseSerialize: serialize_employees_EmployeeResponse,
    responseDeserialize: deserialize_employees_EmployeeResponse,
  },
  createEmployee: {
    path: '/employees.EmployeeService/CreateEmployee',
    requestStream: false,
    responseStream: false,
    requestType: employee_pb.CreateEmployeeRequest,
    responseType: employee_pb.EmployeeResponse,
    requestSerialize: serialize_employees_CreateEmployeeRequest,
    requestDeserialize: deserialize_employees_CreateEmployeeRequest,
    responseSerialize: serialize_employees_EmployeeResponse,
    responseDeserialize: deserialize_employees_EmployeeResponse,
  },
  updateEmployee: {
    path: '/employees.EmployeeService/UpdateEmployee',
    requestStream: false,
    responseStream: false,
    requestType: employee_pb.UpdateEmployeeRequest,
    responseType: employee_pb.EmployeeResponse,
    requestSerialize: serialize_employees_UpdateEmployeeRequest,
    requestDeserialize: deserialize_employees_UpdateEmployeeRequest,
    responseSerialize: serialize_employees_EmployeeResponse,
    responseDeserialize: deserialize_employees_EmployeeResponse,
  },
  deleteEmployee: {
    path: '/employees.EmployeeService/DeleteEmployee',
    requestStream: false,
    responseStream: false,
    requestType: employee_pb.DeleteEmployeeRequest,
    responseType: employee_pb.DeleteEmployeeResponse,
    requestSerialize: serialize_employees_DeleteEmployeeRequest,
    requestDeserialize: deserialize_employees_DeleteEmployeeRequest,
    responseSerialize: serialize_employees_DeleteEmployeeResponse,
    responseDeserialize: deserialize_employees_DeleteEmployeeResponse,
  },
};

exports.EmployeeServiceClient = grpc.makeGenericClientConstructor(EmployeeServiceService);
