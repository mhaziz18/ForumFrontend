import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SujetService } from './sujet.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

url = environment.apiUrl
comments:any[] = [];
constructor(private http:HttpClient, public sujetService:SujetService) { }
private sujetSub = new Subject<any>();
sujet:any;

/*getComments(){
  this.getAllComments()
  return this.commentSub.asObservable();
}*/

/*getAllComments(){
  return this.http.get(this.url+"comment").subscribe((comments:any) => {
    this.comments = comments;
    this.commentSub.next(this.comments);
  })  }*/

getSujet(id:number){
  this.sujetService.getSujet(id).subscribe((sujet:any) => {
    this.sujet = sujet;
    this.sujetSub.next(sujet);
   
  })
  return this.sujetSub.asObservable()
}  
getComment(id:number){
  return this.http.get(this.url+"comment/"+id);
}

updateComment(comment:any){
   this.http.put(this.url+"comment",comment).subscribe((result:any) => {
    let commentFound = this.sujet.comments.find((el:any)=> el.id==comment.id)
    let index = this.sujet.comments.indexOf(commentFound)
    this.sujet.comments[index] = result;
    this.sujetSub.next(this.sujet)
  })
}

deleteComment(id:number){
  return this.http.delete(this.url+"comment/"+id);
}

createComment(comment:any){
  return this.http.post(this.url+"comment",comment)
}

getAllComments(){
  return this.http.get(this.url+"comment");
}

}
