import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  template: `
  <div class="content">
  <title> Registration Form </title>
  <h3 class="title"> Registration Form </h3>
  <form class="center" [formGroup]="registrationForm" (ngSubmit)="submit()">

  <div>
    <input type="text" formControlName="firstName" placeholder="First Name">
    <div *ngIf="firstname.invalid && (firstname.touched || firstname.dirty)">
      <span class="error" *ngIf="firstname.errors?.required">*First Name is required.</span>
      <span class="error" *ngIf="firstname.errors?.pattern">*Enter characters only.</span>
    </div>
  </div>

  <div>
    <input type="text" formControlName="lastName" placeholder="Last name">
    <div *ngIf="lastname.invalid && (lastname.touched || lastname.dirty)">
      <span class="error" *ngIf="lastname.errors?.required">*Last Name is required.</span>
      <span class="error" *ngIf="lastname.errors?.pattern">*Enter characters only.</span>
    </div>
  </div>

  <div>
    <input type="text" formControlName="eid" placeholder="Email Address">
    <div *ngIf="email.invalid && (email.touched || email.dirty)">
      <span class="error" *ngIf="email.errors?.required">*Email Address is required.</span>
      <span class="error" *ngIf="email.errors?.email">*Enter a valid email address.</span>
    </div>
  </div>

  <div>
    <input type="text" formControlName="phone" placeholder="Mobile Number">
    <div *ngIf="number.invalid && (number.touched || number.dirty)">
      <span class="error" *ngIf="number.errors?.required">*Phone number is required.</span>
      <span class="error" *ngIf="number.errors?.pattern">*Enter a valid phone number.</span>
    </div>
  </div>

  <div>
    <button class="btn" [disabled]="registrationForm.invalid">Submit</button>
  </div>
  
  </form>
  </div>  
  `,
  styles: [
    `
    h3 {
      text-align: center;
    }
    .content {
      max-width: 500px;
      margin: auto;
      background-color: #fff;
      padding: 2% 2%;
      margin-top: 80px;
    }
    button {
      background-color: #000;
      color: #fff;
    }
    .error {
      color: red;
    }
    
    input[type=text] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
    }
    .btn {
      width: 100%;
      background-color: brown;
      border: none;
      padding: 16px 32px;
      margin: 8px 0;
      cursor: pointer;
    }
    `
  ]
})
export class SignupComponent implements OnInit {

  registrationForm: any;
  
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      "firstName":new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "lastName":new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "eid":new FormControl(null, [Validators.required, Validators.email]),
      "phone":new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')])
    })
  }

  submit() 
  {
    console.log(this.registrationForm.value)

    if (this.registrationForm.valid) {
      alert (`Thank you ${this.registrationForm.value.firstName}. You are officially registered!`);
    }
  }

  get firstname() {return this.registrationForm.get('firstName');}
  get lastname() {return this.registrationForm.get('lastName');}
  get email() {return this.registrationForm.get('eid');}
  get number() {return this.registrationForm.get('phone');}

}
