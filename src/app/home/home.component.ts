import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../services/authentication.service";
import * as fa from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // condition to login / logout, show or hide
  entrar = false;
  salir = false;
  // icons fontawesome
  alt = fa.faSignInAlt;
  out = fa.faSignOutAlt;

  constructor(private as: AuthenticationService, private router: Router) { }
  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.entrar = true;
      this.salir = false;
    } else {
      this.entrar = false;
      this.salir = true;
    }
  }
  login(){
    this.router.navigate(['login']);
  }
  logout(){
    this.as.logout();
    this.entrar = true;
    this.salir = false;
  }
}



