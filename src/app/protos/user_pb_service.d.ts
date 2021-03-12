// package: users
// file: src/app/protos/user.proto

import * as src_app_protos_user_pb from "../../../src/app/protos/user_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UsersGetUsers = {
  readonly methodName: string;
  readonly service: typeof Users;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_user_pb.UsersRequest;
  readonly responseType: typeof src_app_protos_user_pb.UsersReply;
};

export class Users {
  static readonly serviceName: string;
  static readonly GetUsers: UsersGetUsers;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class UsersClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getUsers(
    requestMessage: src_app_protos_user_pb.UsersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_user_pb.UsersReply|null) => void
  ): UnaryResponse;
  getUsers(
    requestMessage: src_app_protos_user_pb.UsersRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_user_pb.UsersReply|null) => void
  ): UnaryResponse;
}

