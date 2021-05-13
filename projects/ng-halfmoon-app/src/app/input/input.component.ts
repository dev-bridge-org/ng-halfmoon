import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  test: string = 'Test';
  testRequired: string = '';

  reactive: FormControl = new FormControl('');
  reactiveRequired: FormControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

}
