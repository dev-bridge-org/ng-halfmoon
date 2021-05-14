import {
  AfterViewChecked,
  Component,
  ContentChild,
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

@Component({
  selector: 'hm-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
  providers: [ControlService]
})
export class FormGroupComponent implements OnInit, AfterViewChecked, OnDestroy {
  @HostBinding('class.form-group') baseClass = true;
  @HostBinding('class.is-invalid') isInvalid = false;
  controlLabel: HTMLLabelElement;
  control: HTMLInputElement;

  @ContentChild(InputDirective) input: InputDirective;

  private controlService: ControlService
  private subscription: Subscription

  constructor(private el: ElementRef, private renderer: Renderer2, injector: Injector) {
    this.controlService = injector.get(ControlService);
    this.subscription = this.controlService.currentStatus$.subscribe((status) => {
      this.isInvalid = status === ControlStatus.INVALID;
    });
  }

  ngOnInit(): void {
    this.controlLabel = this.el.nativeElement.firstChild;
    this.control = this.el.nativeElement.childNodes[2];
  }

  ngAfterViewChecked() {
    if(this.control.required && !this.controlLabel.classList.contains('required')) {
      this.renderer.addClass(this.controlLabel, 'required');
    } else if (!this.control.required && this.controlLabel.classList.contains('required')) {
      this.renderer.removeClass(this.controlLabel, 'required');
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get canShowError(): boolean {
    return this.isInvalid;
  }
}
