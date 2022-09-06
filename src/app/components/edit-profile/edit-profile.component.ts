import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user:any;
  fullName:string="";
  imagePreview:string="";
  image:any;
  constructor(public authService:AuthService, public userService:UserService) {
    
   }

  ngOnInit(): void {
    this.authService.getUser();
    this.fullName = this.authService.loggedUser.fullName;
    this.imagePreview = this.authService.loggedUser.image;
    this.user = this.authService.loggedUser;
   
  }

  onImagePicked(imageInput: any,image:any) {
    const file : File = imageInput.files[0];
    this.image = file;
    //this.profileForm.patchValue({image: file});
    //console.log(file);
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview=reader.result as string;
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
}
  editProfile(){
    if(this.imagePreview || this.fullName){
      this.userService.editUser(this.fullName, this.image).subscribe((result:any)=>{
        console.log(result);
        this.authService.loggedUser.image = result.image;
        this.authService.loggedUser.fullName = result.fullName;
      })
    }

  }

  openPicker(filePicker:any){
    filePicker.click();
  }
}
