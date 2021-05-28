import { Component, OnInit } from '@angular/core';
import {ModalRef} from "ng-halfmoon";

@Component({
  selector: 'app-basic-modal',
  template: `
    <p>
      basic-modal works!
    </p>
  `,
  styles: [
  ]
})
export class BasicModalComponent implements OnInit {

  constructor(private modalRef: ModalRef<BasicModalComponent>) { }

  ngOnInit(): void {
  }

}
