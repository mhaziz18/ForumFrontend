import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  url = environment.apiUrl
  
  constructor(private http:HttpClient) { }
  private sujetsSub = new Subject<any[]>();
  sujets:any[] = []
  getSujets(){
    this.getAllSujet()
    return this.sujetsSub.asObservable();
  }

  getAllSujet(){
    return this.http.get(this.url+"sujet").subscribe((sujets:any) => {
      this.sujets = sujets;
      this.sujetsSub.next(this.sujets.reverse());
    })  }

  getSujet(id:number){
    return this.http.get(this.url+"sujet/"+id);
  }

  updateSujet(sujet:any){
    return this.http.put(this.url+"sujet",sujet).subscribe((result:any)=>{
      //let findSujet = this.sujets.find(el => el.id == sujet.id)
      let foundSujet = this.sujets.find(el => el.id == result.id)
      let index = this.sujets.indexOf(foundSujet)
      console.log(foundSujet)
    console.log(result)
      this.sujets[index] = result;
      console.log(this.sujets)
      this.sujetsSub.next(this.sujets.reverse());
    });
  }

  deleteSujet(id:number){
    return this.http.delete(this.url+"sujet/"+id);
  }
  
  createSujet(sujet:any){
    return this.http.post(this.url+"sujet",sujet).subscribe((result)=>{
      this.sujets.push(result);
      this.sujetsSub.next(this.sujets.reverse());
    })
  }

  getMySubjects(id:number){

  }
  
}
