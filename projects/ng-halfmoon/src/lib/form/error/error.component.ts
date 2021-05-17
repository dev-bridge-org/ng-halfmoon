import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'hm-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  @HostBinding('class.invalid-feedback') baseClass = true;
}
