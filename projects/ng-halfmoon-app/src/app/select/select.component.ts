import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  test: string = '';
  testRequired: string = '';

  reactive: FormControl = new FormControl('');
  reactiveRequired: FormControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

}
