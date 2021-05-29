import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-sample-wrapper',
  template: `
    <div class="card p-0">
      <div class="content">
        <ng-content></ng-content>
      </div>
      <ng-content select="app-code-collapse"></ng-content>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleWrapperComponent {}
