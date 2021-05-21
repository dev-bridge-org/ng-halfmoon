import { Component } from '@angular/core';
import * as halfmoon from 'halfmoon';
import {DarkModeService} from "ng-halfmoon";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-halfmoon-app';

  constructor(private darkMode: DarkModeService) {
  }

  toggle(): void {
    this.darkMode.toggleDarkMode();
  }

  get isEnabled$(): Observable<boolean> {
    return this.darkMode.darkModeEnabled$;
  }
}
