import {Component, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {Appearance, Applier} from '../../utils';

@Component({
  selector: 'hm-alert',
  template: `
    <button class="close" data-dismiss="alert" type="button" aria-label="Close" *ngIf="dismissable">
      <span aria-hidden="true">&times;</span>
    </button>
    <ng-content select="h4"></ng-content>
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AlertComponent extends Applier implements OnInit, OnChanges {
  @HostBinding('class.alert') alertClass = true;
  @Input() appearance: Appearance;
  @Input() dismissable: boolean = false;

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer, 'alert');
  }

  ngOnInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'role', 'alert');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appearance) {
      this.applyChange(changes.appearance, this.el);
    }
  }

}
