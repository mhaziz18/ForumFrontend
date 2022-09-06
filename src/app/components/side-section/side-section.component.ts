import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-side-section',
  templateUrl: './side-section.component.html',
  styleUrls: ['./side-section.component.css']
})
export class SideSectionComponent implements OnInit {
  commentNbr:number=0;
  subjectNbr:number=0;
  subjects:any[]=[]
  constructor(public sujetService: SujetService, public commentService:CommentService) { }

  ngOnInit(): void {
    this.sujetService.getSujets().subscribe(sujets =>{
      this.subjectNbr = sujets.length;
      this.subjects = sujets.slice(0,6)
    })
    this.commentService.getAllComments().subscribe((comments:any) =>{
      this.commentNbr = comments.length;
    })
  }

}
