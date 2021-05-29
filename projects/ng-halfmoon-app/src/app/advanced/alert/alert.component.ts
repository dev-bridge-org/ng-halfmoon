import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ALERT_BASIC_HTML, ALERT_DISMISS_HTML} from './alert-docs.constants';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  get basicHtml(): string {
    return ALERT_BASIC_HTML;
  }

  get dismissHtml(): string {
    return ALERT_DISMISS_HTML;
  }
}
