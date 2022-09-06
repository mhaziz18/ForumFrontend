import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  input:string="";

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number, sujetId:number}, public authService:AuthService, public commentService:CommentService) { }

  ngOnInit(): void {
    this.commentService.getComment(this.data.id).subscribe((result:any)=>{
      console.log(result)
      this.input = result.text;
    })

  }

  editComment(){
    let comment = { id:this.data.id, text: this.input, user: {id:this.authService.loggedUser.id}, sujetId:this.data.sujetId };
    this.commentService.updateComment(comment)
  }

}
