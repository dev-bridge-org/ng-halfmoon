import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChange, SimpleChanges} from '@angular/core';
import {Applier, Sizing} from "../../utils";

export type Appearance = 'primary' | 'secondary' | 'success' | 'danger' | 'link' | undefined;

export type Shape = 'rounded' | 'square' | undefined;

@Directive({
  selector: '[hmButton]',
})
export class ButtonDirective extends Applier implements OnChanges {
  @Input() appearance: Appearance;
  @Input() size: Sizing;
  @Input() shape: Shape;
  @Input() disabled: boolean;

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer, 'btn');
    this.addClass('btn', this.el);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appearance) {
      this.applyChange(changes.appearance, this.el);
    }
    if (changes.size) {
      this.applyChange(changes.size, this.el);
    }
    if (changes.shape) {
      this.applyChange(changes.shape, this.el);
    }
    if (changes.disabled) {
      this.applyDisabled(changes.disabled);
      this.applyAttribute(changes.disabled, 'disabled');
    }
  }

  private applyDisabled(change: SimpleChange): void {
    if (change.previousValue === change.currentValue) {
      return;
    }

    if (!change.currentValue) {
      this.removeClass('disabled', this.el);
      return;
    }

    this.addClass('disabled', this.el);
  }
}
