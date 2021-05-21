import { Component, OnInit } from '@angular/core';
import {DarkModeService} from "ng-halfmoon";

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.darkModeService.toggleDarkMode();
  }

}
