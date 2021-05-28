import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  BUTTON_APPEARANCE_HTML, BUTTON_DISABLED_HTML,
  BUTTON_SHAPES_HTML,
  BUTTON_SIZING_HTML,
  BUTTON_TAGS_HTML
} from "./button-docs.constants";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsComponent {
  get appearanceHtml(): string {
    return BUTTON_APPEARANCE_HTML;
  }

  get tagsHtml(): string {
    return BUTTON_TAGS_HTML;
  }

  get sizingHtml(): string {
    return BUTTON_SIZING_HTML;
  }

  get shapesHtml(): string {
    return BUTTON_SHAPES_HTML;
  }

  get disabledHtml(): string {
    return BUTTON_DISABLED_HTML;
  }
}
