import {
  ContentChild, Directive,
  ElementRef,
  HostBinding,
  Injector,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import {InputDirective} from "../input/input.directive";
import {ControlService, ControlStatus} from "../services/control.service";
import {Subscription} from "rxjs";

@Directive()
export abstract class FormGroupDirective implements OnInit, OnDestroy {
  @HostBinding('class.form-group') baseClass = true;
  @HostBinding('class.is-invalid') isInvalid = false;
  controlLabel: HTMLLabelElement;

  @ContentChild(InputDirective) input: InputDirective;

  private controlService: ControlService
  private subscription: Subscription

  protected constructor(protected el: ElementRef, protected renderer: Renderer2, protected injector: Injector) {
    this.controlService = injector.get(ControlService);
    this.subscription = this.controlService.currentStatus$.subscribe((status) => {
      this.isInvalid = status === ControlStatus.INVALID;
    });
  }

  ngOnInit(): void {
    this.controlLabel = this.el.nativeElement.firstChild;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateLabelPostfix(isRequired: boolean): void {
    if(isRequired && !this.controlLabel.classList.contains('required')) {
      this.renderer.addClass(this.controlLabel, 'required');
    } else if (!isRequired && this.controlLabel.classList.contains('required')) {
      this.renderer.removeClass(this.controlLabel, 'required');
    }
  }

  get canShowError(): boolean {
    return this.isInvalid;
  }
}
