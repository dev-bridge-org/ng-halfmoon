import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ModalService} from "ng-halfmoon";
import {TestModalComponent} from "../test-modal/test-modal.component";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  test: string = '';
  testRequired: string = '';

  reactive: FormControl = new FormControl('');
  reactiveRequired: FormControl = new FormControl('', Validators.required);

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    const modalRef = this.modalService.createModal(TestModalComponent, {defaultDismiss: true});

    modalRef.afterClosed.subscribe(() => {
      console.log('Test');
    })
  }

}
