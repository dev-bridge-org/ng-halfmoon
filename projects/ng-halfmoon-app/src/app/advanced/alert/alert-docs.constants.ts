import hljs from 'highlight.js';

export const ALERT_BASIC_HTML = hljs.highlight(
  `<hm-alert>
  <h4 class="alert-heading">Default alert</h4>
  This is a default alert with some content and <a href="#" class="alert-link">a link</a>.
</hm-alert>
<hm-alert appearance="primary">
  <h4 class="alert-heading">Primary alert</h4>
  This is a primary alert with some content and <a href="#" class="alert-link">a link</a>.
</hm-alert>
<hm-alert appearance="success">
  <h4 class="alert-heading">Success alert</h4>
  This is a success alert with some content and <a href="#" class="alert-link">a link</a>.
</hm-alert>
<hm-alert appearance="secondary">
  <h4 class="alert-heading">Secondary alert</h4>
  This is a secondary alert with some content and <a href="#" class="alert-link">a link</a>.
</hm-alert>
<hm-alert appearance="danger">
  <h4 class="alert-heading">Danger alert</h4>
  This is a danger alert with some content and <a href="#" class="alert-link">a link</a>.
</hm-alert>
`,
  {language: 'html'}
).value;

export const ALERT_DISMISS_HTML = hljs.highlight(
  `<hm-alert [dismissable]="true">
  <h4 class="alert-heading">Default alert</h4>
  This is a default alert with some content and <a href="#" class="alert-link">a link</a>.
</hm-alert>
<hm-alert appearance="primary" [dismissable]="true">
  <h4 class="alert-heading">Primary alert</h4>
  This is a primary alert with some content and <a href="#" class="alert-link">a link</a>.
</hm-alert>
<hm-alert appearance="success" [dismissable]="true">
  <h4 class="alert-heading">Success alert</h4>
  This is a success alert with some content and <a href="#" class="alert-link">a link</a>.
</hm-alert>
<hm-alert appearance="secondary" [dismissable]="true">
  <h4 class="alert-heading">Secondary alert</h4>
  This is a secondary alert with some content and <a href="#" class="alert-link">a link</a>.
</hm-alert>
<hm-alert appearance="danger" [dismissable]="true">
  <h4 class="alert-heading">Danger alert</h4>
  This is a danger alert with some content and <a href="#" class="alert-link">a link</a>.
</hm-alert>
`,
  {language: 'html'}
).value;
