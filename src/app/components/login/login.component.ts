import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }
  invalid=false;
  login = new UntypedFormGroup({
    email: new UntypedFormControl('',[Validators.required]),
    password: new UntypedFormControl('',[Validators.required]),

  });
  ngOnInit(): void {
  }

  onLoggedin()
  {
    
    if(this.login.valid) {
      //console.log("email: "+this.login.value.email );
      //console.log("password: "+this.login.value.password );
      this.auth.SignIn(this.login.value.email, this.login.value.password);
    }else{
      this.invalid=true;
    }

      }

}
