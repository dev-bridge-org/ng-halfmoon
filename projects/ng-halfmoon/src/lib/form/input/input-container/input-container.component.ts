import {
  AfterViewChecked,
  Component,
  ElementRef,
  Injector,
  OnInit,
  Renderer2
} from '@angular/core';
import {ControlService} from '../../services/control.service';
import {FormGroupDirective} from '../../form-group/form-group.directive';

@Component({
  selector: 'hm-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css'],
  providers: [ControlService]
})
export class InputContainerComponent
  extends FormGroupDirective
  implements OnInit, AfterViewChecked
{
  control: HTMLInputElement;

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
