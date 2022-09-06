import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-user',
  templateUrl: './dash-user.component.html',
  styleUrls: ['./dash-user.component.css']
})
export class DashUserComponent implements OnInit {
  users:any[]=[]
  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((result:any) => {
      this.users = result;
    })
  }

  delete(id:string):void{
    this.userService.deleteUser(id).subscribe((result:any) => {
      this.users = this.users.filter(user => user.id != id)
    })
  }

}
