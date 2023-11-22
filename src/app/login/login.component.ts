import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){}

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  formSubmit(){
    // console.log(this.profileForm.value)
    const { email, password } = this.profileForm.value
    if (!email || !password){
      return alert("Set The Fucking Email And Password!!!!")
    }
    this.router.navigateByUrl("www.google.com")
  }

}
