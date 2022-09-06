import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public loggedUser: any; 
  public isloggedIn: boolean = false;
  public role: string= ""; 
  public token:string="";
  private error = new Subject<number>();
  url = environment.apiUrl

  constructor(private router: Router, private http:HttpClient) { }

  getUser(){
    this.http.get(this.url+"user/"+this.loggedUser.id).subscribe(user=>{
      this.loggedUser = user;
    })
  }

  logout() { 
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.role = "";
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
  }
  
    SignIn(email:string, password:string){ 
      return this.http.post(this.url+"auth/login",{ email:email, password:password}).subscribe((result:any) => {
        if(result["token"]){
          localStorage.setItem('token',result.token);
          localStorage.setItem('user',JSON.stringify(result.user));
          this.loggedUser=result.user;
          this.role=result.user.role;
          this.token=result.token;
          //console.log(this.loggedUser);
          this.isloggedIn=true;
          setTimeout(()=>{
            this.logout();
          },3600000)
          //console.log(this.loggedUser.role == "ADMIN")
          if(this.loggedUser.role == "ADMIN"){
            console.log(this.loggedUser.role == "ADMIN")
            this.router.navigate(['/dashbord/users'])
          }else{
            this.router.navigate(['/'])
          }

        }
  
        },(err) => {
          console.log(err)
          this.error.next(1);
        });
    }
  
    register(form:any){
      let request = {fullName:form.fullName, email:form.email, password:form.password};
      console.log(request);
      return this.http.post(this.url+"auth/register",request).subscribe((result:any) => {
        this.router.navigate(['/activation']);
      })
    }

    activate(id:string) {
      return this.http.get(this.url+"auth/activate/"+id);
    }

    autoAuthUser(){
      const authData = this.getAuthData();
      if(!authData){
        return;
  
      }
        this.token=authData.token;
        this.isloggedIn=true;
        this.loggedUser =authData.user? JSON.parse(authData.user):null;
        setTimeout(()=>{
          this.logout();
          },5400000)
         
    }

    private getAuthData(){
      const token = localStorage.getItem("token");
      const expirationDate = localStorage.getItem("expiration")
      const user =localStorage.getItem("user")
      if(!token) return null;
      return {token:token,user:user}
    }
}
