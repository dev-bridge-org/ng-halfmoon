import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ModalRef} from 'ng-halfmoon';

@Component({
  selector: 'app-dismiss-modal',
  template: `
    <h5 class="modal-title">Dismissible Modal</h5>
    <p>
      This option just allows you to activate the close-button in the top-left
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DismissModalComponent {
  constructor(private modalRef: ModalRef<DismissModalComponent>) {}
}
