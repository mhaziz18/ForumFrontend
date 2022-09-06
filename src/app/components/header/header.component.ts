import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, public dialog: MatDialog) { }


  ngOnInit(): void {
    
  }

  editProfile(){
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '350px',
      
    });
  }

}
