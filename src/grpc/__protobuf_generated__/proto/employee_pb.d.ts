// package: employee
// file: proto/employee.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetEmployeeRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetEmployeeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEmployeeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEmployeeRequest): GetEmployeeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEmployeeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEmployeeRequest;
    static deserializeBinaryFromReader(message: GetEmployeeRequest, reader: jspb.BinaryReader): GetEmployeeRequest;
}

export namespace GetEmployeeRequest {
    export type AsObject = {
        id: number,
    }
}

export class CreateEmployeeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateEmployeeRequest;
    getEmail(): string;
    setEmail(value: string): CreateEmployeeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEmployeeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEmployeeRequest): CreateEmployeeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEmployeeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEmployeeRequest;
    static deserializeBinaryFromReader(message: CreateEmployeeRequest, reader: jspb.BinaryReader): CreateEmployeeRequest;
}

export namespace CreateEmployeeRequest {
    export type AsObject = {
        name: string,
        email: string,
    }
}

export class UpdateEmployeeRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateEmployeeRequest;
    getName(): string;
    setName(value: string): UpdateEmployeeRequest;
    getEmail(): string;
    setEmail(value: string): UpdateEmployeeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEmployeeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEmployeeRequest): UpdateEmployeeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEmployeeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEmployeeRequest;
    static deserializeBinaryFromReader(message: UpdateEmployeeRequest, reader: jspb.BinaryReader): UpdateEmployeeRequest;
}

export namespace UpdateEmployeeRequest {
    export type AsObject = {
        id: number,
        name: string,
        email: string,
    }
}

export class EmployeeResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): EmployeeResponse;
    getName(): string;
    setName(value: string): EmployeeResponse;
    getEmail(): string;
    setEmail(value: string): EmployeeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmployeeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EmployeeResponse): EmployeeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmployeeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmployeeResponse;
    static deserializeBinaryFromReader(message: EmployeeResponse, reader: jspb.BinaryReader): EmployeeResponse;
}

export namespace EmployeeResponse {
    export type AsObject = {
        id: number,
        name: string,
        email: string,
    }
}

export class DeleteEmployeeRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteEmployeeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEmployeeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEmployeeRequest): DeleteEmployeeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEmployeeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEmployeeRequest;
    static deserializeBinaryFromReader(message: DeleteEmployeeRequest, reader: jspb.BinaryReader): DeleteEmployeeRequest;
}

export namespace DeleteEmployeeRequest {
    export type AsObject = {
        id: number,
    }
}

export class DeleteEmployeeResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): DeleteEmployeeResponse;
    getMessage(): string;
    setMessage(value: string): DeleteEmployeeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEmployeeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEmployeeResponse): DeleteEmployeeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEmployeeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEmployeeResponse;
    static deserializeBinaryFromReader(message: DeleteEmployeeResponse, reader: jspb.BinaryReader): DeleteEmployeeResponse;
}

export namespace DeleteEmployeeResponse {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}
