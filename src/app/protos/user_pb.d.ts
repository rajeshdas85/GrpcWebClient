// package: users
// file: src/app/protos/user.proto

import * as jspb from "google-protobuf";

export class UsersRequest extends jspb.Message {
  getDepartmentname(): string;
  setDepartmentname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UsersRequest): UsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersRequest;
  static deserializeBinaryFromReader(message: UsersRequest, reader: jspb.BinaryReader): UsersRequest;
}

export namespace UsersRequest {
  export type AsObject = {
    departmentname: string,
  }
}

export class UsersReply extends jspb.Message {
  clearListofusersList(): void;
  getListofusersList(): Array<User>;
  setListofusersList(value: Array<User>): void;
  addListofusers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersReply.AsObject;
  static toObject(includeInstance: boolean, msg: UsersReply): UsersReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsersReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersReply;
  static deserializeBinaryFromReader(message: UsersReply, reader: jspb.BinaryReader): UsersReply;
}

export namespace UsersReply {
  export type AsObject = {
    listofusersList: Array<User.AsObject>,
  }
}

export class User extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    name: string,
    id: number,
  }
}

