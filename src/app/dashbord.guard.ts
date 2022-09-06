import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./services/auth.service";

@Injectable()
export class DashboardGuard implements CanActivate{
    constructor(private authService: AuthService,private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isAuth = this.authService.isloggedIn;
        const role = this.authService.loggedUser?.role
        if(!isAuth){
            this.router.navigate(["/login"])
            return false
        }
        if(role !="ADMIN"){
            this.router.navigate(["/"])
            return false
        }
       return true; 
    }

} 