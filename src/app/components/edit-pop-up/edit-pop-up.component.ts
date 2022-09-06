import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RatingService } from 'src/app/services/rating.service';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.css']
})
export class EditPopUpComponent implements OnInit {
  sujet:any;
  editForm = new UntypedFormGroup({
    title: new UntypedFormControl('',[Validators.required]),
    body: new UntypedFormControl('',[Validators.required]),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number},public sujetService:SujetService,public ratingService:RatingService) { }

  ngOnInit(): void {
    this.sujetService.getSujet(this.data.id).subscribe(result => {
      this.sujet = result
      this.editForm.setValue({title:this.sujet.title,body:this.sujet.text})
    })
  }

  editSujet(){
    if(this.editForm.valid){
        this.sujet.title=this.editForm.value.title
        this.sujet.text = this.editForm.value.body
        this.sujetService.updateSujet(this.sujet)

    }
    
  }

}
