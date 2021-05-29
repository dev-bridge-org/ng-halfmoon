import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ModalRef} from 'ng-halfmoon';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-data-output-modal',
  template: `
    <form [formGroup]="form">
      <hm-input-container>
        <label for="name">Name</label>
        <input type="text" hmInput formControlName="name" />
      </hm-input-container>

      <button hmButton appearance="primary" (click)="submit()" type="button">
        Submit
      </button>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataOutputModalComponent {
  form = new FormGroup({
    name: new FormControl('')
  });

  constructor(private modalRef: ModalRef) {}

  submit(): void {
    this.modalRef.close(this.form.value);
  }
}
