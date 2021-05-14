import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'hm-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent {
  @HostBinding('class.form-text') baseClass = true;
}
