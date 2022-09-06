import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  id: string="";
  description =""
  constructor(private activatedRoute : ActivatedRoute, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.id = params['id'];
      if(this.id){
        this.auth.activate(this.id).subscribe((result) => {
          this.description = "Account Activated Successfully"
        },(err) => {
          this.description = "Error in serveur occured try again!!"
        })
      }else{
        this.description = "this link is no longer availbe !!"
      }

      console.log(this.id); // price
    }
  );

  }

}
