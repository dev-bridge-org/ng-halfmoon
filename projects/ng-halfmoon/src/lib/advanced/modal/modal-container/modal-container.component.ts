import {AfterContentInit, AfterViewInit, Component, HostBinding, HostListener} from '@angular/core';
import {ModalRef} from "../modal-ref";
import * as halfmoon from 'halfmoon';

@Component({
  selector: 'hm-modal-container',
  template: `
    <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button class="close" type="button" aria-label="Close" *ngIf="defaultDismiss" (click)="close()">
            <span aria-hidden="true">&times;</span>
          </button>
          <ng-content></ng-content>
        </div>
    </div>
  `,
  host: {
    class: 'modal',
    role: 'dialog',
    tabindex: '-1',
    'data-overlay-dismissal-disabled': 'true',
    'data-esc-dismissal-disabled': 'true'
  },
  styles: [
  ]
})
export class ModalContainerComponent implements AfterContentInit {
  @HostBinding('class.show') isShown = false;
  @HostBinding('attr.id') id: string;
  defaultDismiss: boolean;

  constructor(private modalRef: ModalRef) { }

  ngAfterContentInit(): void {
    // this.isShown = true;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-dialog')) {
      this.close();
    }
  }

  @HostListener('window:keydown.esc')
  onEsc(): void {
    this.close();
  }

  close(): void {
    this.modalRef.close();
  }
}
