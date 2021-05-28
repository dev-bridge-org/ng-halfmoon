import { Component, OnInit } from '@angular/core';
import {ModalService} from "ng-halfmoon";
import {DismissModalComponent} from "./dismiss-modal/dismiss-modal.component";
import {DataInputModalComponent} from "./data-input-modal/data-input-modal.component";
import {BasicModalComponent} from "./basic-modal/basic-modal.component";
import {DataOutputModalComponent} from "./data-output-modal/data-output-modal.component";
import {
  DATA_INPUT_CALL, DATA_INPUT_MODAL_HTML, DATA_INPUT_MODAL_TS,
  DATA_OUTPUT_CALL,
  DATA_OUTPUT_MODAL_HTML,
  DATA_OUTPUT_MODAL_TS, DISMISS_CALL, DISMISS_MODAL_HTML, DISMISS_MODAL_TS,
  STANDARD_CALL, STANDARD_MODAL_HTML,
  STANDARD_MODAL_TS
} from "./modal-doc.constants";

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

  get standardCall(): string {
    return STANDARD_CALL;
  }

  get standardModalCode(): string {
    return STANDARD_MODAL_TS;
  }

  get standardModalHtml(): string {
    return STANDARD_MODAL_HTML;
  }

  get dismissCall(): string {
    return DISMISS_CALL;
  }

  get dismissModalCode(): string {
    return DISMISS_MODAL_TS;
  }

  get dismissModalHtml(): string {
    return DISMISS_MODAL_HTML;
  }

  get dataInputCall(): string {
    return DATA_INPUT_CALL;
  }

  get dataInputModalCode(): string {
    return DATA_INPUT_MODAL_TS;
  }

  get dataInputModalHtml(): string {
    return DATA_INPUT_MODAL_HTML;
  }

  get dataOutputCall(): string {
    return DATA_OUTPUT_CALL;
  }

  get dataOutputModalCode(): string {
    return DATA_OUTPUT_MODAL_TS;
  }

  get dataOutputModalHtml(): string {
    return DATA_OUTPUT_MODAL_HTML;
  }

}
