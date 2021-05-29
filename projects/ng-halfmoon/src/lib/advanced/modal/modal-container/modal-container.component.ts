import {Component, HostBinding, HostListener} from '@angular/core';
import {ModalRef} from '../modal-ref';

@Component({
  selector: 'hm-modal-container',
  template: `
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button
          class="close"
          type="button"
          aria-label="Close"
          *ngIf="defaultDismiss"
          (click)="close()"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class ModalContainerComponent {
  @HostBinding('class.modal') readonly baseClass = true;
  @HostBinding('attr.role') readonly role = 'dialog';
  @HostBinding('attr.tabindex') readonly tabindex = '-1';
  @HostBinding('attr.data-overlay-dismissal-disabled')
  readonly overlayDismissal = 'true';
  @HostBinding('attr.data-esc-dismissal-disabled') readonly escDismissal =
    'true';

  @HostBinding('class.show') isShown = false;
  @HostBinding('attr.id') id: string;
  defaultDismiss: boolean;

  constructor(private modalRef: ModalRef) {}

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
