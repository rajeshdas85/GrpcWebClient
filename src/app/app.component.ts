import { Component, OnInit } from '@angular/core';
import { HelloReply, HelloRequest } from './protos/greet_pb';
import { GreeterClient, ServiceError } from './protos/greet_pb_service';
import { User, UsersReply, UsersRequest } from './protos/user_pb';
import { UsersClient } from './protos/user_pb_service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
    title = 'GrpcWebClient';
    response: string;
    responseUser: {};
    resUserData={};
    constructor(private userService: UserService) { }
  
    ngOnInit(): void {

      // const client = new GreeterClient('https://localhost:5001');
      // const req = new HelloRequest();
      // req.setName("Rajesh");
      // client.sayHello(req, (err: ServiceError, response: HelloReply) => {
      //   if (err) {
      //     this.response = `Error: {err.message}`;
      //     return;
      //   }
      //   this.response = response.getMessage();
      // });

      const client = new UsersClient('https://localhost:5001');
      const req = new UsersRequest();
      req.setDepartmentname("Sales");
      client.getUsers(req, (err: ServiceError, response: UsersReply) => {
        if (err) {
          this.response = `Error: {err.message}`;
          return;
        }
        this.responseUser = response.getListofusersList();
        console.log(this.responseUser);
      }); 

      this.userService.getUser().subscribe(data => this.resUserData = data);

    }
  
  }
 
  

