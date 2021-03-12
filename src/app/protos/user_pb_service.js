// package: users
// file: src/app/protos/user.proto

var src_app_protos_user_pb = require("../../../src/app/protos/user_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Users = (function () {
  function Users() {}
  Users.serviceName = "users.Users";
  return Users;
}());

Users.GetUsers = {
  methodName: "GetUsers",
  service: Users,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_user_pb.UsersRequest,
  responseType: src_app_protos_user_pb.UsersReply
};

exports.Users = Users;

function UsersClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UsersClient.prototype.getUsers = function getUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Users.GetUsers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.UsersClient = UsersClient;

