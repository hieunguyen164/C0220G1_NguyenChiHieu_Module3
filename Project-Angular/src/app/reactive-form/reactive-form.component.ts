import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
registerForm: FormGroup;
  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      age: ['', this.checkAge]
    });
  }

  getDataFromForm(): void{
    console.log(this.registerForm.value);
  }

  checkAge(a: AbstractControl){
    const b = a.value;
    return b < 18 ? {invalidAge: true} : null;
  }

}
