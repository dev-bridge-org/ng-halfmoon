import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  required: boolean = true;

  name: string = '';
  specialization: string = '';

  usernameControl = new FormControl('');
  usernameRequiredControl = new FormControl('', Validators.required)

  form = new FormGroup({
    firstname: new FormControl('', Validators.pattern('[A-Za-z]+')),
    familyname: new FormControl('', Validators.pattern('[A-Za-z]+')),
    specialization: new FormControl(''),
    gender: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
