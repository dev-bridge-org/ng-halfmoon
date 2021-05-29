import {Component} from '@angular/core';
import {DarkModeService} from 'ng-halfmoon';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  constructor(private darkMode: DarkModeService) {}

  toggle(): void {
    this.darkMode.toggleDarkMode();
  }

  get isEnabled$(): Observable<boolean> {
    return this.darkMode.darkModeEnabled$;
  }
}
