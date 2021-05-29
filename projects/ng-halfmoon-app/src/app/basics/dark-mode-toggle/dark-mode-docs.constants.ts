import hljs from 'highlight.js';

export const DARK_MODE_USAGE_TS = hljs.highlight(
  `export class DarkModeToggleComponent {
  constructor(private darkModeService: DarkModeService) {}

  toggle(): void {
    this.darkModeService.toggleDarkMode();
  }
}
`,
  {language: 'ts'}
).value;
