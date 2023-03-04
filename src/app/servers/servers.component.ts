import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.Component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "Test Server";
  serverCreated = false;
  servers = ["testserver", "testserver 2"]

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }
  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServereName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
