import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthanticationservicesService } from 'src/app/services/authanticationservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serv: AuthanticationservicesService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.login = this.fb.group({
      Email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      Password: ['', [Validators.required]],
    });
  }
  get Email() {
    return this.login.get('Email');
  }
  get Password() {
    return this.login.get('Password');
  }

  getUserData() {
    console.log(this.login.value);
  }
  loginfn() {
    this.serv
      .signIn({
        email: this.login.value.Email,
        password: this.login.value.Password,
      })
      .subscribe((response) => {
        const token = response.user._delegate.accessToken;
        console.log(response);
        if (token) {
          // Store the token in localStorage
          localStorage.setItem('token', token);
          // Navigate to adminpart or any other protected route
          this.router.navigate(['adminpart']);
        } else {
          alert('there is no token');
        }
      });
  }

  recoverPassword() {
    this.serv
      .recoverPassword(this.login.value.Email)
      .subscribe((res) => console.log(res));
  }
}
