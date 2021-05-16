import {
  Directive,
  ElementRef, HostBinding, HostListener, Injector,
  Input,
  OnChanges, OnDestroy, OnInit,
  Optional,
  Renderer2,
  Self,
  SimpleChanges
} from '@angular/core';
import {Applier, Sizing} from "../../utils";
import {FormControl, NgControl} from "@angular/forms";
import {ControlService, ControlStatus} from "../services/control.service";
import {Subscription} from "rxjs";

@Directive({
  selector: '[hmInput]'
})
export class InputDirective extends Applier implements OnInit, OnChanges, OnDestroy {
  @Input() sizing: Sizing = undefined;
  @HostBinding('class.is-invalid') isInvalid: boolean = false;

  private controlService: ControlService
  private subscription: Subscription
  constructor(
    private ngControl: NgControl,
    el: ElementRef,
    renderer: Renderer2,
    injector: Injector
  ) {
    super(el, renderer, 'form-control');
    this.addClass('form-control', this.el);
    this.controlService = injector.get(ControlService);
  }

  ngOnInit() {
    this.controlService.init(this.ngControl.control as FormControl);
    this.controlService.currentStatus$.subscribe((value) => {
      this.isInvalid = value === ControlStatus.INVALID;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sizing) {
      this.applyChange(changes.sizing, this.el);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('blur')
  changeStatus(): void {
    this.controlService.triggerStatusChange();
  }

}
