import {Component, OnInit} from '@angular/core';
import {ModalRef} from "ng-halfmoon";

@Component({
  selector: 'app-dismiss-modal',
  template: `
    <p>
      dismiss-modal works!
    </p>
  `,
  styles: [
  ]
})
export class DismissModalComponent implements OnInit {

  constructor(private modalRef: ModalRef<DismissModalComponent>) { }

  ngOnInit(): void {
  }

}
