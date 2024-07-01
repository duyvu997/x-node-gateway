// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ./src/grpc/employee/proto/employee.proto
//
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_employee_pb = require('./employee_pb.cjs');

function serialize_employee_CreateEmployeeRequest(arg) {
  if (!(arg instanceof proto_employee_pb.CreateEmployeeRequest)) {
    throw new Error('Expected argument of type employee.CreateEmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_CreateEmployeeRequest(buffer_arg) {
  return proto_employee_pb.CreateEmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_DeleteEmployeeRequest(arg) {
  if (!(arg instanceof proto_employee_pb.DeleteEmployeeRequest)) {
    throw new Error('Expected argument of type employee.DeleteEmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_DeleteEmployeeRequest(buffer_arg) {
  return proto_employee_pb.DeleteEmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_DeleteEmployeeResponse(arg) {
  if (!(arg instanceof proto_employee_pb.DeleteEmployeeResponse)) {
    throw new Error('Expected argument of type employee.DeleteEmployeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_DeleteEmployeeResponse(buffer_arg) {
  return proto_employee_pb.DeleteEmployeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_EmployeeResponse(arg) {
  if (!(arg instanceof proto_employee_pb.EmployeeResponse)) {
    throw new Error('Expected argument of type employee.EmployeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_EmployeeResponse(buffer_arg) {
  return proto_employee_pb.EmployeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_GetEmployeeRequest(arg) {
  if (!(arg instanceof proto_employee_pb.GetEmployeeRequest)) {
    throw new Error('Expected argument of type employee.GetEmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_GetEmployeeRequest(buffer_arg) {
  return proto_employee_pb.GetEmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_employee_UpdateEmployeeRequest(arg) {
  if (!(arg instanceof proto_employee_pb.UpdateEmployeeRequest)) {
    throw new Error('Expected argument of type employee.UpdateEmployeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_employee_UpdateEmployeeRequest(buffer_arg) {
  return proto_employee_pb.UpdateEmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EmployeeServiceService = exports.EmployeeServiceService = {
  getEmployee: {
    path: '/employee.EmployeeService/GetEmployee',
    requestStream: false,
    responseStream: false,
    requestType: proto_employee_pb.GetEmployeeRequest,
    responseType: proto_employee_pb.EmployeeResponse,
    requestSerialize: serialize_employee_GetEmployeeRequest,
    requestDeserialize: deserialize_employee_GetEmployeeRequest,
    responseSerialize: serialize_employee_EmployeeResponse,
    responseDeserialize: deserialize_employee_EmployeeResponse,
  },
  createEmployee: {
    path: '/employee.EmployeeService/CreateEmployee',
    requestStream: false,
    responseStream: false,
    requestType: proto_employee_pb.CreateEmployeeRequest,
    responseType: proto_employee_pb.EmployeeResponse,
    requestSerialize: serialize_employee_CreateEmployeeRequest,
    requestDeserialize: deserialize_employee_CreateEmployeeRequest,
    responseSerialize: serialize_employee_EmployeeResponse,
    responseDeserialize: deserialize_employee_EmployeeResponse,
  },
  updateEmployee: {
    path: '/employee.EmployeeService/UpdateEmployee',
    requestStream: false,
    responseStream: false,
    requestType: proto_employee_pb.UpdateEmployeeRequest,
    responseType: proto_employee_pb.EmployeeResponse,
    requestSerialize: serialize_employee_UpdateEmployeeRequest,
    requestDeserialize: deserialize_employee_UpdateEmployeeRequest,
    responseSerialize: serialize_employee_EmployeeResponse,
    responseDeserialize: deserialize_employee_EmployeeResponse,
  },
  deleteEmployee: {
    path: '/employee.EmployeeService/DeleteEmployee',
    requestStream: false,
    responseStream: false,
    requestType: proto_employee_pb.DeleteEmployeeRequest,
    responseType: proto_employee_pb.DeleteEmployeeResponse,
    requestSerialize: serialize_employee_DeleteEmployeeRequest,
    requestDeserialize: deserialize_employee_DeleteEmployeeRequest,
    responseSerialize: serialize_employee_DeleteEmployeeResponse,
    responseDeserialize: deserialize_employee_DeleteEmployeeResponse,
  },
};

exports.EmployeeServiceClient = grpc.makeGenericClientConstructor(EmployeeServiceService);
