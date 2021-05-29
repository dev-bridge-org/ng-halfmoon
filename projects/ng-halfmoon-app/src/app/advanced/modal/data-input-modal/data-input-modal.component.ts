import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MODAL_DATA, ModalRef} from 'ng-halfmoon';

interface Test {
  test: string;
}

@Component({
  selector: 'app-data-input-modal',
  template: `
    <h5 class="modal-title">Modal with Data send to the modal</h5>
    <p>
      {{ testData }}
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataInputModalComponent {
  constructor(
    private modalRef: ModalRef<DataInputModalComponent>,
    @Inject(MODAL_DATA) private data: Test
  ) {}

  get testData(): string {
    return this.data.test;
  }
}
