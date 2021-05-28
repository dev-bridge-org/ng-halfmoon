import { Component, OnInit } from '@angular/core';
import {ModalService} from "ng-halfmoon";
import {DismissModalComponent} from "./dismiss-modal/dismiss-modal.component";
import {DataInputModalComponent} from "./data-input-modal/data-input-modal.component";
import {BasicModalComponent} from "./basic-modal/basic-modal.component";
import {DataOutputModalComponent} from "./data-output-modal/data-output-modal.component";

interface Test {
  test: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openStandard(): void {
    this.modalService.createModal(BasicModalComponent);
  }

  openWithDismiss(): void {
    this.modalService.createModal(DismissModalComponent, {defaultDismiss: true});
  }

  openWithCustomData(): void {
    this.modalService.createModal(DataInputModalComponent, {data: {test: 'Hello I am a test'}});
  }

  openWithReturnedData(): void {
    const modalRef = this.modalService.createModal(DataOutputModalComponent, {defaultDismiss: true});

    modalRef.afterClosed.subscribe((data) => {
      console.log('Test', data);
    });
  }

}
