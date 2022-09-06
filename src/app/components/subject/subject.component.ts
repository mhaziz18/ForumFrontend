import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';
import { RatingService } from 'src/app/services/rating.service';
import { SujetService } from 'src/app/services/sujet.service';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  starRating:number=0;
  rating:any;
  alreadyRated = false;
  sujet:any
  constructor(private sujetService: SujetService,private commentService: CommentService,
     private activatedRoute: ActivatedRoute, public auth: AuthService, public dialog: MatDialog, public rateService:RatingService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        console.log(params["id"]);
        let id =  params["id"]

        this.commentService.getSujet(id).subscribe(sujet =>{
          this.sujet = sujet;
          
          this.rateService.getRating(this.sujet.id,this.auth.loggedUser.id).subscribe((rating:any) =>{
            if(rating){
              console.log("rating")
              console.log(rating);
              this.rating = rating;
              this.alreadyRated = true;
              this.starRating = rating.value;
            }
          })
        })
      })

  }

  addComment(input:String){
    let commment = { text:input, userId:this.auth.loggedUser.id, sujetId:this.sujet.id }
    console.log(commment)
    this.commentService.createComment(commment).subscribe((result:any)=>{
      this.sujet.comments.push(result)

    })
  }

  deleteComment(id:number){
      this.commentService.deleteComment(id).subscribe((result:any)=>{
        this.sujet.comments = this.sujet.comments.filter((el:any)=>el.id != id)
      })
  }

  editComment(id:number){
    const dialogRef = this.dialog.open(EditCommentComponent, {
      width: '250px',
      data: {id:id, sujetId:this.sujet.id},
    });
  }

  rate(){
    if(this.alreadyRated){
      let rating = { sujetId:this.sujet.id, userId:this.auth.loggedUser.id, value:this.starRating}
      this.rateService.editRating(rating,this.rating.id).subscribe((result:any)=>{
        console.log(result)
        this.sujet = result.sujet;
        
      })

    }else{
      this.alreadyRated=true
      let rating = { sujetId:this.sujet.id, userId:this.auth.loggedUser.id, value:this.starRating}
      this.rateService.addRating(rating).subscribe((result:any)=>{
        console.log(result)
        this.sujet = result.sujet;
        
      })
    }

  }
}
