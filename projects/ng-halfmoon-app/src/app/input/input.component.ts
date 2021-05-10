import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  test: string = 'Test';
  testRequired: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
