import {Component, Inject, OnInit} from '@angular/core';
import {ModalRef, MODAL_DATA} from "ng-halfmoon";

interface Test {
  test: string;
}

@Component({
  selector: 'app-data-input-modal',
  template: `
    <p>
      {{testData}}
    </p>
  `,
  styles: [
  ]
})
export class DataInputModalComponent implements OnInit {

  constructor(private modalRef: ModalRef<DataInputModalComponent>, @Inject(MODAL_DATA) private data: Test) { }

  ngOnInit(): void {
  }

  get testData(): string {
    return this.data.test;
  }
}
