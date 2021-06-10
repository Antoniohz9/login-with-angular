import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// font awesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// required imports
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from './helpers';
import { routing } from "./app.routing";
// components created
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './home/admin/admin.component';
import { ClientComponent } from './home/client/client.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ClientComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
