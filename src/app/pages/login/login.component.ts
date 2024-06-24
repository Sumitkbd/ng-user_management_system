import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message!: string;

  constructor(
    private fb: FormBuilder,
    private auth: UserService,
    private router: Router
  ) {
    // Initialize userForm with form controls and validators
    this.loginForm = this.fb.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('')
    });
  }
  ngOnInit(): void { }

  login() {
    const data = this.loginForm.value; // Get form values
    this.auth.signin(data).subscribe((res: any) => {
      if (res.success) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profile']);
      } else {
        alert(res.message);
      }
    }, err => {
      alert("Login Failed");
    });
  }



}

