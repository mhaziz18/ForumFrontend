import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})
export class AddPopUpComponent implements OnInit {

  sujet:any;
  addForm = new UntypedFormGroup({
    title: new UntypedFormControl('',[Validators.required]),
    text: new UntypedFormControl('',[Validators.required]),
  });

  constructor(public sujetService:SujetService, public authService:AuthService) { }


  ngOnInit(): void {
  }
  addSujet(){
    let sujet = { title: this.addForm.value.title, text: this.addForm.value.text, userId:this.authService.loggedUser.id }
    this.sujetService.createSujet(sujet)
  }

}
