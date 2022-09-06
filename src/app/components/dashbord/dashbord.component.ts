import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  listNav=[true,false,false,false]

  constructor(private router :Router, 
    public auth: AuthService) { }

  ngOnInit(): void {
    
  }

  logout() {
    this.auth.logout();
   
  }
  
  go(index:number,path:string) {
    for(let i=0;i<this.listNav.length;i++){
      this.listNav[i]=false;
    }
    this.listNav[index]=true
    this.router.navigate([path])
  }

}
