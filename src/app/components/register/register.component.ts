import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  invalid=false;
  register = new UntypedFormGroup({
    fullName: new UntypedFormControl('',[Validators.required]),
    email: new UntypedFormControl('',[Validators.required]),
    password: new UntypedFormControl('',[Validators.required]),
    confirmPassword: new UntypedFormControl('',[Validators.required]),
  });

  constructor(private auth: AuthService) {

   }

  
  ngOnInit(): void {
  }

  onRegister()
  {
    
    if(this.register.valid && this.invalid != true && this.register.value.password == this.register.value.confirmPassword) {
      this.auth.register(this.register.value)
    }else{
      this.invalid=true;
    }

      }

}
