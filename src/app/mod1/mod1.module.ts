import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc/calc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    CalcComponent,
    SignupComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CalcComponent,
    SignupComponent
  ]
})
export class Mod1Module { }
