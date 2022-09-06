import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { SujetService } from 'src/app/services/sujet.service';
import { AddPopUpComponent } from '../add-pop-up/add-pop-up.component';
import { EditPopUpComponent } from '../edit-pop-up/edit-pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sujets:any[]=[]
  mysubjects:any[]=[]

  constructor(public sujetService: SujetService,public authService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sujetService.getSujets().subscribe((result:any) => {
      this.sujets=result;
      this.mysubjects = this.sujets.filter(sujet => sujet.user.id == this.authService.loggedUser.id)   
      console.log(this.mysubjects) 
    })

  }
  
  addSujet(){
    const dialogRef = this.dialog.open(AddPopUpComponent, {
      width: '250px',
      
    });
  }

  editSujet(id:number){
    const dialogRef = this.dialog.open(EditPopUpComponent, {
      width: '250px',
      data: {id:id}
    });
  }

  deleteSujet(id:number){
    this.sujetService.deleteSujet(id).subscribe(result=>{
      this.sujets = this.sujets.filter(sujet=>sujet.id != id)
    })
  }

}
