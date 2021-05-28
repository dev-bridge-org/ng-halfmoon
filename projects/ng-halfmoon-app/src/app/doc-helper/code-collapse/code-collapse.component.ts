import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-code-collapse',
  template: `
    <details class="collapse-panel">
      <summary class="collapse-header">
        {{title}}
      </summary>
      <div class="collapse-content">
        <pre class="m-0"><code [className]="language" [innerHTML]="code"></code></pre>
      </div>
    </details>
  `,
  styles: [
    `
      .collapse-content {
        background-color: #e7e7e7;
      }
    `
  ]
})
export class CodeCollapseComponent implements OnInit {
  @Input() title: string;
  @Input() language: string;
  @Input() code: string;

  constructor() { }

  ngOnInit(): void {
  }

}
