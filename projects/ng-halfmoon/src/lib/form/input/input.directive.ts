import {
  Directive,
  DoCheck,
  ElementRef, HostBinding,
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
  selector: '[hmInput]'
})
export class InputDirective extends Applier implements OnChanges, DoCheck {
  @Input() sizing: Sizing = undefined;
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
    if (changes.sizing) {
      this.applyChange(changes.sizing, this.el);
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.isInvalid = !!(this.ngControl.invalid && (this.ngControl.touched || this.ngControl.dirty));
    }
  }

}
