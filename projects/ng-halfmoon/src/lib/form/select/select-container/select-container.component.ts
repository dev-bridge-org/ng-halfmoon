import {AfterViewChecked, Component, ElementRef, Injector, OnInit, Renderer2} from '@angular/core';
import {FormGroupDirective} from "../../form-group/form-group.directive";
import {ControlService} from "../../services/control.service";

@Component({
  selector: 'hm-select-container',
  template: `
    <ng-content select="label"></ng-content>
    <ng-content select="hm-error" *ngIf="canShowError"></ng-content>
    <ng-content select="select"></ng-content>
    <ng-content select="hm-hint"></ng-content>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  providers: [ControlService]
})
export class SelectContainerComponent extends FormGroupDirective implements OnInit, AfterViewChecked {
  control: HTMLSelectElement;

  constructor(el: ElementRef, renderer: Renderer2, injector: Injector) {
    super(el, renderer, injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.control = this.el.nativeElement.childNodes[2];
  }

  ngAfterViewChecked() {
    this.updateLabelPostfix(this.control.required);
  }
}
