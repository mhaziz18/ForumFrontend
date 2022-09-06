import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { DashUserComponent } from './components/dash-user/dash-user.component';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';
import { ActivateComponent } from './components/activate/activate.component';
import { ActivationInProgComponent } from './components/activation-in-prog/activation-in-prog.component';
import { AuthInterceptor } from './auth.interceptor';
import { SubjectComponent } from './components/subject/subject.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { EditPopUpComponent } from './components/edit-pop-up/edit-pop-up.component';
import { AddPopUpComponent } from './components/add-pop-up/add-pop-up.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentComponent } from './components/component/component.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component'; 
import { AuthGuard } from './auth.guard';
import { DashboardGuard } from './dashbord.guard';
import { SearchSujetPipe } from './pipes/search-sujet.pipe';
import { SideSectionComponent } from './components/side-section/side-section.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashbordComponent,
    DashUserComponent,
    SearchByNamePipe,
    ActivateComponent,
    ActivationInProgComponent,
    SubjectComponent,
    EditPopUpComponent,
    AddPopUpComponent,
    EditCommentComponent,
    ComponentComponent,
    EditProfileComponent,
    SearchSujetPipe,
    SideSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbRatingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, AuthGuard, DashboardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
