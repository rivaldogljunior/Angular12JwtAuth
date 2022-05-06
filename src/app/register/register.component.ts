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
    username: null,
    email: null,
    password: null,
    gender: 'Masculino',
    birth: '1977-06-28',
    city: 'Recife',
    state: 'Pernambuco  '
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void { }

  onSubmit(): void {
    const { username, email, password, birth, gender, city, state } = this.form;
    this.authService.register(username, email, password, birth, gender, city, state).subscribe(
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
