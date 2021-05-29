import hljs from 'highlight.js';

export const BUTTON_APPEARANCE_HTML = hljs.highlight(
  `<button hmButton>Default</button>
<button hmButton appearance="primary">Primary</button>
<button hmButton appearance="danger">Danger</button>
<button hmButton appearance="link">Link</button>
<button hmButton appearance="success">Success</button>
<button hmButton appearance="secondary">Secondary</button>
`,
  {language: 'html'}
).value;

export const BUTTON_TAGS_HTML = hljs.highlight(
  `<button hmButton>Default</button>
<input hmButton appearance="primary" type="submit" value="Input-Button">
<a hmButton appearance="link" role="button" href="#">Link</a>
`,
  {language: 'html'}
).value;

export const BUTTON_SIZING_HTML = hljs.highlight(
  `<button hmButton size="lg">Default</button>
<button hmButton appearance="primary" size="lg">Primary</button>
<button hmButton size="sm">Default</button>
<button hmButton appearance="primary" size="sm">Primary</button>
`,
  {language: 'html'}
).value;

export const BUTTON_SHAPES_HTML = hljs.highlight(
  `<button hmButton shape="rounded">Rounded</button>
<button hmButton shape="square">&times;</button>
`,
  {language: 'html'}
).value;

export const BUTTON_DISABLED_HTML = hljs.highlight(
  `<button hmButton [disabled]="true">Default</button>
<button hmButton appearance="primary" [disabled]="true">Primary</button>
`,
  {language: 'html'}
).value;
