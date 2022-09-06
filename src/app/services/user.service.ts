import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'}) 
  url:string = environment.apiUrl
  constructor(private http: HttpClient, public auth: AuthService) { }

  getUsers(){
    return this.http.get(this.url+"user",{headers: this.headers})
  }

  getUser(id:string){
    return this.http.get(this.url+"user/"+id)
  }

  deleteUser(id:string){
    return this.http.delete(this.url+"user/"+id,{headers: this.headers})
  }

  editUser(fullName:any,image:any){
    let user = new FormData()
    if(fullName){
      user.append("fullName",fullName)
      
    }
    if(image){
      user.append("image",image)
    }
    return this.http.put(this.url+"user/"+this.auth.loggedUser.id,user)
  }

}
