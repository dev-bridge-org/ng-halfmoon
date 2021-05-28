import { Component, OnInit } from '@angular/core';
import {ModalRef} from "ng-halfmoon";

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {

  constructor(private modalRef: ModalRef<TestModalComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.modalRef.close();
  }

}
