// package: employee
// file: proto/employee.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_employee_pb from "../proto/employee_pb";

interface IEmployeeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getEmployee: IEmployeeServiceService_IGetEmployee;
    createEmployee: IEmployeeServiceService_ICreateEmployee;
    updateEmployee: IEmployeeServiceService_IUpdateEmployee;
    deleteEmployee: IEmployeeServiceService_IDeleteEmployee;
    getEmployees: IEmployeeServiceService_IGetEmployees;
}

interface IEmployeeServiceService_IGetEmployee extends grpc.MethodDefinition<proto_employee_pb.GetEmployeeRequest, proto_employee_pb.EmployeeResponse> {
    path: "/employee.EmployeeService/GetEmployee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_employee_pb.GetEmployeeRequest>;
    requestDeserialize: grpc.deserialize<proto_employee_pb.GetEmployeeRequest>;
    responseSerialize: grpc.serialize<proto_employee_pb.EmployeeResponse>;
    responseDeserialize: grpc.deserialize<proto_employee_pb.EmployeeResponse>;
}
interface IEmployeeServiceService_ICreateEmployee extends grpc.MethodDefinition<proto_employee_pb.CreateEmployeeRequest, proto_employee_pb.EmployeeResponse> {
    path: "/employee.EmployeeService/CreateEmployee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_employee_pb.CreateEmployeeRequest>;
    requestDeserialize: grpc.deserialize<proto_employee_pb.CreateEmployeeRequest>;
    responseSerialize: grpc.serialize<proto_employee_pb.EmployeeResponse>;
    responseDeserialize: grpc.deserialize<proto_employee_pb.EmployeeResponse>;
}
interface IEmployeeServiceService_IUpdateEmployee extends grpc.MethodDefinition<proto_employee_pb.UpdateEmployeeRequest, proto_employee_pb.EmployeeResponse> {
    path: "/employee.EmployeeService/UpdateEmployee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_employee_pb.UpdateEmployeeRequest>;
    requestDeserialize: grpc.deserialize<proto_employee_pb.UpdateEmployeeRequest>;
    responseSerialize: grpc.serialize<proto_employee_pb.EmployeeResponse>;
    responseDeserialize: grpc.deserialize<proto_employee_pb.EmployeeResponse>;
}
interface IEmployeeServiceService_IDeleteEmployee extends grpc.MethodDefinition<proto_employee_pb.DeleteEmployeeRequest, proto_employee_pb.DeleteEmployeeResponse> {
    path: "/employee.EmployeeService/DeleteEmployee";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_employee_pb.DeleteEmployeeRequest>;
    requestDeserialize: grpc.deserialize<proto_employee_pb.DeleteEmployeeRequest>;
    responseSerialize: grpc.serialize<proto_employee_pb.DeleteEmployeeResponse>;
    responseDeserialize: grpc.deserialize<proto_employee_pb.DeleteEmployeeResponse>;
}
interface IEmployeeServiceService_IGetEmployees extends grpc.MethodDefinition<proto_employee_pb.GetEmployeesRequest, proto_employee_pb.GetEmployeesResponse> {
    path: "/employee.EmployeeService/GetEmployees";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_employee_pb.GetEmployeesRequest>;
    requestDeserialize: grpc.deserialize<proto_employee_pb.GetEmployeesRequest>;
    responseSerialize: grpc.serialize<proto_employee_pb.GetEmployeesResponse>;
    responseDeserialize: grpc.deserialize<proto_employee_pb.GetEmployeesResponse>;
}

export const EmployeeServiceService: IEmployeeServiceService;

export interface IEmployeeServiceServer extends grpc.UntypedServiceImplementation {
    getEmployee: grpc.handleUnaryCall<proto_employee_pb.GetEmployeeRequest, proto_employee_pb.EmployeeResponse>;
    createEmployee: grpc.handleUnaryCall<proto_employee_pb.CreateEmployeeRequest, proto_employee_pb.EmployeeResponse>;
    updateEmployee: grpc.handleUnaryCall<proto_employee_pb.UpdateEmployeeRequest, proto_employee_pb.EmployeeResponse>;
    deleteEmployee: grpc.handleUnaryCall<proto_employee_pb.DeleteEmployeeRequest, proto_employee_pb.DeleteEmployeeResponse>;
    getEmployees: grpc.handleUnaryCall<proto_employee_pb.GetEmployeesRequest, proto_employee_pb.GetEmployeesResponse>;
}

export interface IEmployeeServiceClient {
    getEmployee(request: proto_employee_pb.GetEmployeeRequest, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    getEmployee(request: proto_employee_pb.GetEmployeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    getEmployee(request: proto_employee_pb.GetEmployeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    createEmployee(request: proto_employee_pb.CreateEmployeeRequest, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    createEmployee(request: proto_employee_pb.CreateEmployeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    createEmployee(request: proto_employee_pb.CreateEmployeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    updateEmployee(request: proto_employee_pb.UpdateEmployeeRequest, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    updateEmployee(request: proto_employee_pb.UpdateEmployeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    updateEmployee(request: proto_employee_pb.UpdateEmployeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    deleteEmployee(request: proto_employee_pb.DeleteEmployeeRequest, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.DeleteEmployeeResponse) => void): grpc.ClientUnaryCall;
    deleteEmployee(request: proto_employee_pb.DeleteEmployeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.DeleteEmployeeResponse) => void): grpc.ClientUnaryCall;
    deleteEmployee(request: proto_employee_pb.DeleteEmployeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.DeleteEmployeeResponse) => void): grpc.ClientUnaryCall;
    getEmployees(request: proto_employee_pb.GetEmployeesRequest, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.GetEmployeesResponse) => void): grpc.ClientUnaryCall;
    getEmployees(request: proto_employee_pb.GetEmployeesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.GetEmployeesResponse) => void): grpc.ClientUnaryCall;
    getEmployees(request: proto_employee_pb.GetEmployeesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.GetEmployeesResponse) => void): grpc.ClientUnaryCall;
}

export class EmployeeServiceClient extends grpc.Client implements IEmployeeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getEmployee(request: proto_employee_pb.GetEmployeeRequest, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    public getEmployee(request: proto_employee_pb.GetEmployeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    public getEmployee(request: proto_employee_pb.GetEmployeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    public createEmployee(request: proto_employee_pb.CreateEmployeeRequest, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    public createEmployee(request: proto_employee_pb.CreateEmployeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    public createEmployee(request: proto_employee_pb.CreateEmployeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    public updateEmployee(request: proto_employee_pb.UpdateEmployeeRequest, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    public updateEmployee(request: proto_employee_pb.UpdateEmployeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    public updateEmployee(request: proto_employee_pb.UpdateEmployeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.EmployeeResponse) => void): grpc.ClientUnaryCall;
    public deleteEmployee(request: proto_employee_pb.DeleteEmployeeRequest, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.DeleteEmployeeResponse) => void): grpc.ClientUnaryCall;
    public deleteEmployee(request: proto_employee_pb.DeleteEmployeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.DeleteEmployeeResponse) => void): grpc.ClientUnaryCall;
    public deleteEmployee(request: proto_employee_pb.DeleteEmployeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.DeleteEmployeeResponse) => void): grpc.ClientUnaryCall;
    public getEmployees(request: proto_employee_pb.GetEmployeesRequest, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.GetEmployeesResponse) => void): grpc.ClientUnaryCall;
    public getEmployees(request: proto_employee_pb.GetEmployeesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.GetEmployeesResponse) => void): grpc.ClientUnaryCall;
    public getEmployees(request: proto_employee_pb.GetEmployeesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_employee_pb.GetEmployeesResponse) => void): grpc.ClientUnaryCall;
}
