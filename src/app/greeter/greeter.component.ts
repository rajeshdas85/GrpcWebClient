import { Component, OnInit } from '@angular/core';
import { HelloReply, HelloRequest } from '../protos/greet_pb';
import { GreeterClient, ServiceError } from '../protos/greet_pb_service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {
  response: string;
  constructor() { }

  ngOnInit(): void {
    const client = new GreeterClient('https://localhost:5001');
    const req = new HelloRequest();
    req.setName("Rajesh is good Boy!");
    client.sayHello(req, (err: ServiceError, response: HelloReply) => {
      if (err) {
        this.response = `Error: {err.message}`;
        return;
      }
      this.response = response.getMessage();
    });
  }

}
