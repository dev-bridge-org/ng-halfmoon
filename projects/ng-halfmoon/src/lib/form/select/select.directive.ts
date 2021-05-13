import {
  Directive,
  DoCheck,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Optional,
  Renderer2,
  Self,
  SimpleChanges
} from '@angular/core';
import {Applier, Sizing} from "../../utils";
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[hmSelect]'
})
export class SelectDirective extends Applier implements OnChanges, DoCheck {
  // TODO: redesign sizing due to size property on html-select
  @Input() size: Sizing = undefined;
  @HostBinding('class.is-invalid') isInvalid: boolean = false;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    el: ElementRef,
    renderer: Renderer2
  ) {
    super(el, renderer, 'form-control');
    this.addClass('form-control', this.el);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.size) {
      this.applyChange(changes.size, this.el);
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.isInvalid = !!(this.ngControl.invalid && (this.ngControl.touched || this.ngControl.dirty));
    }
  }

}
