// GENERATED CODE -- DO NOT EDIT!

// package: employees
// file: employee.proto

import * as employee_pb from "./employee_pb";
import * as grpc from '@grpc/grpc-js';

interface IEmployeeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getEmployee: grpc.MethodDefinition<employee_pb.GetEmployeeRequest, employee_pb.EmployeeResponse>;
  createEmployee: grpc.MethodDefinition<employee_pb.CreateEmployeeRequest, employee_pb.EmployeeResponse>;
  updateEmployee: grpc.MethodDefinition<employee_pb.UpdateEmployeeRequest, employee_pb.EmployeeResponse>;
  deleteEmployee: grpc.MethodDefinition<employee_pb.DeleteEmployeeRequest, employee_pb.DeleteEmployeeResponse>;
}

export const EmployeeServiceService: IEmployeeServiceService;

export interface IEmployeeServiceServer extends grpc.UntypedServiceImplementation {
  getEmployee: grpc.handleUnaryCall<employee_pb.GetEmployeeRequest, employee_pb.EmployeeResponse>;
  createEmployee: grpc.handleUnaryCall<employee_pb.CreateEmployeeRequest, employee_pb.EmployeeResponse>;
  updateEmployee: grpc.handleUnaryCall<employee_pb.UpdateEmployeeRequest, employee_pb.EmployeeResponse>;
  deleteEmployee: grpc.handleUnaryCall<employee_pb.DeleteEmployeeRequest, employee_pb.DeleteEmployeeResponse>;
}

export class EmployeeServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getEmployee(argument: employee_pb.GetEmployeeRequest, callback: grpc.requestCallback<employee_pb.EmployeeResponse>): grpc.ClientUnaryCall;
  getEmployee(argument: employee_pb.GetEmployeeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<employee_pb.EmployeeResponse>): grpc.ClientUnaryCall;
  getEmployee(argument: employee_pb.GetEmployeeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<employee_pb.EmployeeResponse>): grpc.ClientUnaryCall;
  createEmployee(argument: employee_pb.CreateEmployeeRequest, callback: grpc.requestCallback<employee_pb.EmployeeResponse>): grpc.ClientUnaryCall;
  createEmployee(argument: employee_pb.CreateEmployeeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<employee_pb.EmployeeResponse>): grpc.ClientUnaryCall;
  createEmployee(argument: employee_pb.CreateEmployeeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<employee_pb.EmployeeResponse>): grpc.ClientUnaryCall;
  updateEmployee(argument: employee_pb.UpdateEmployeeRequest, callback: grpc.requestCallback<employee_pb.EmployeeResponse>): grpc.ClientUnaryCall;
  updateEmployee(argument: employee_pb.UpdateEmployeeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<employee_pb.EmployeeResponse>): grpc.ClientUnaryCall;
  updateEmployee(argument: employee_pb.UpdateEmployeeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<employee_pb.EmployeeResponse>): grpc.ClientUnaryCall;
  deleteEmployee(argument: employee_pb.DeleteEmployeeRequest, callback: grpc.requestCallback<employee_pb.DeleteEmployeeResponse>): grpc.ClientUnaryCall;
  deleteEmployee(argument: employee_pb.DeleteEmployeeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<employee_pb.DeleteEmployeeResponse>): grpc.ClientUnaryCall;
  deleteEmployee(argument: employee_pb.DeleteEmployeeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<employee_pb.DeleteEmployeeResponse>): grpc.ClientUnaryCall;
}
