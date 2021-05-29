import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-code-collapse',
  template: `
    <details class="collapse-panel">
      <summary class="collapse-header">
        {{ title }}
      </summary>
      <div class="collapse-content">
        <pre
          class="m-0"
        ><code [className]="language" [innerHTML]="code"></code></pre>
      </div>
    </details>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeCollapseComponent {
  @Input() title: string;
  @Input() language: string;
  @Input() code: string;
}
