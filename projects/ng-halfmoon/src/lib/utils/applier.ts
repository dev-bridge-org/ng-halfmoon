import {ElementRef, Renderer2, SimpleChange} from '@angular/core';

export class Applier {
  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
    protected baseClass: string
  ) {}

  protected applyChange(change: SimpleChange, el: ElementRef): void {
    if (Applier.hasValueChanged(change)) {
      return;
    }

    if (!change.isFirstChange()) {
      this.removeClass(`${this.baseClass}-${change.previousValue}`, el);
    }
    this.addClass(`${this.baseClass}-${change.currentValue}`, el);
  }

  protected static hasValueChanged(change: SimpleChange): boolean {
    return !change.currentValue || change.previousValue === change.currentValue;
  }

  protected addClass(cls: string, el: ElementRef): void {
    this.renderer.addClass(el.nativeElement, cls);
  }

  protected removeClass(cls: string, el: ElementRef): void {
    this.renderer.removeClass(el.nativeElement, cls);
  }

  protected applyAttribute(change: SimpleChange, attribute: string): void {
    if (change.previousValue === change.currentValue) {
      return;
    }

    if (!change.currentValue) {
      this.renderer.removeAttribute(this.el.nativeElement, attribute);
      return;
    }

    this.renderer.setAttribute(this.el.nativeElement, attribute, '');
  }
}
