import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ModalRef} from 'ng-halfmoon';

@Component({
  selector: 'app-basic-modal',
  template: `
    <h5 class="modal-title">Standard Modal</h5>
    <p>This is just some sample text to show the basic-usage of a modal</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicModalComponent {
  constructor(private modalRef: ModalRef<BasicModalComponent>) {}
}
