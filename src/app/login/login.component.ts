import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder, private router: Router, private authenticationService: AuthenticationService) {
    this.form = this.fb.group({
      name: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }
  login() {
    const val = this.form.value;
    if (val.name && val.password) {
      this.authenticationService.login(val.name, val.password).subscribe( data => {
        if (localStorage.getItem('rol')== 'client') {
          this.router.navigate(['home/cliente']);
          // this.router.navigateByUrl('/');
        }
        if (localStorage.getItem('rol')== 'admin') {
          this.router.navigate(['home/admin']);
        }
      },
      error => {
        console.log(error);
        // this.error = error;
        // this.loading = false;
      });
    }
  }

}
