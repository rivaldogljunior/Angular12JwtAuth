import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {  

  form: any = {
    name: null,
    username: null,
    email: null,
    password: null,
    gender: null,
    birth: null,
    city: null,
    state: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void { }

  onSubmit(): void {
    const { name, username, email, password, birth, gender, city, state } = this.form;
    this.authService.register(name, username, email, password, birth, gender, city, state).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );        
  }
}
