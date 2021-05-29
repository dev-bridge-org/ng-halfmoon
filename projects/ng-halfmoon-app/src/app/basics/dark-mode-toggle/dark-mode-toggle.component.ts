import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DarkModeService} from 'ng-halfmoon';
import {DARK_MODE_USAGE_TS} from './dark-mode-docs.constants';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkModeToggleComponent {
  constructor(private darkModeService: DarkModeService) {}

  toggle(): void {
    this.darkModeService.toggleDarkMode();
  }

  get darkModeUsage(): string {
    return DARK_MODE_USAGE_TS;
  }
}
