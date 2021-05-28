import {
  Directive,
  DoCheck,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  Self,
  SimpleChanges
} from '@angular/core';
import {Applier, Sizing} from '../../utils';
import {FormControl, NgControl} from '@angular/forms';
import {ControlService, ControlStatus} from '../services/control.service';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[hmInput]'
})
export class InputDirective
  extends Applier
  implements OnInit, DoCheck, OnChanges, OnDestroy
{
  @Input() sizing: Sizing = undefined;
  @HostBinding('class.is-invalid') isInvalid: boolean = false;

  private subscription: Subscription;
  constructor(
    @Optional() @Self() private ngControl: NgControl,
    @Optional() private controlService: ControlService,
    el: ElementRef,
    renderer: Renderer2
  ) {
    super(el, renderer, 'form-control');
    this.addClass('form-control', this.el);
  }

  ngOnInit(): void {
    this.setupControlService();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sizing) {
      this.applyChange(changes.sizing, this.el);
    }
  }

  ngDoCheck() {
    if (!this.controlService && this.ngControl) {
      this.isInvalid = !!(
        this.ngControl.invalid &&
        (this.ngControl.touched || this.ngControl.dirty)
      );
    }
  }

  ngOnDestroy(): void {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }

  @HostListener('blur')
  changeStatus(): void {
    if (!this.controlService) {
      return;
    }

    this.controlService.triggerStatusChange();
  }

  private setupControlService(): void {
    if (!this.controlService) {
      return;
    }
    this.controlService.init(this.ngControl.control as FormControl);
    this.subscription = this.controlService.currentStatus$.subscribe(
      (value) => {
        this.isInvalid = value === ControlStatus.INVALID;
      }
    );
  }
}
