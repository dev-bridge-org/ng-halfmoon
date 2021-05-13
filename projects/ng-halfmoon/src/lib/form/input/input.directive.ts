import {
  Directive,
  DoCheck,
  ElementRef, HostBinding, Injector,
  Input,
  OnChanges,
  Optional,
  Renderer2,
  Self,
  SimpleChanges
} from '@angular/core';
import {Applier, Sizing} from "../../utils";
import {NgControl} from "@angular/forms";
import {ControlService} from "../services/control.service";

@Directive({
  selector: '[hmInput]'
})
export class InputDirective extends Applier implements OnChanges, DoCheck {
  @Input() sizing: Sizing = undefined;
  @HostBinding('class.is-invalid') isInvalid: boolean = false;
  private controlService: ControlService
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    el: ElementRef,
    renderer: Renderer2,
    injector: Injector
  ) {
    super(el, renderer, 'form-control');
    this.addClass('form-control', this.el);
    this.controlService = injector.get(ControlService);
    this.controlService.init(this.ngControl);
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
