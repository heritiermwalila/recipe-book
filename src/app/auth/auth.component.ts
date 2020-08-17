import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService, AuthResponse } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  status = 'login';
  isLoading = false;
  error = null;

  ngOnInit(): void { }

  onSubmit(data: NgForm) {
    let AuthObservable: Observable<AuthResponse>;
    this.isLoading = true;
    if (this.status === 'login') {
      AuthObservable = this.authService.login(
        data.value.email,
        data.value.password
      );
    } else {
      AuthObservable = this.authService.signup({
        email: data.value.email,
        password: data.value.password
      });
    }
    AuthObservable.subscribe(
      response => {
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error => {
        this.isLoading = false;
        this.error = error;
      }
    );
  }

  toggleStatus() {
    this.status = this.status === 'login' ? 'register' : 'login';
  }
}
