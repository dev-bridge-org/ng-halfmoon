import hljs from "highlight.js";

export const DATA_OUTPUT_MODAL_HTML = hljs.highlight(
  `<form [formGroup]="form">
  <hm-input-container>
    <label for="name">Name</label>
    <input type="text" hmInput formControlName="name">
  </hm-input-container>

  <button hmButton appearance="primary" (click)="submit()" type="button">Submit</button>
</form>
`, {language: 'html'}).value

export const DATA_OUTPUT_MODAL_TS = hljs.highlight(
  `export class DataOutputModalComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('')
  });

  constructor(private modalRef: ModalRef) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.modalRef.close(this.form.value);
  }

}
`, {language: 'ts'}).value

export const DATA_OUTPUT_CALL = hljs.highlight(
  `openWithReturnedData(): void {
  const modalRef = this.modalService.createModal(DataOutputModalComponent, {defaultDismiss: true});

  modalRef.afterClosed.subscribe((data) => {
    console.log('Test', data);
  });
}
`, {language: 'ts'}).value;

export const STANDARD_CALL = hljs.highlight(
  `openStandard(): void {
  this.modalService.createModal(BasicModalComponent);
}`, {language: 'ts'}).value;

export const STANDARD_MODAL_TS = hljs.highlight(
  `export class BasicModalComponent implements OnInit {

  constructor(private modalRef: ModalRef<BasicModalComponent>) { }

  ngOnInit(): void {
  }

}
`, {language: 'ts'}).value;

export const STANDARD_MODAL_HTML = hljs.highlight(
  `<h5 class="modal-title">Standard Modal</h5>
<p>This is just some sample text to show the basic-usage of a modal</p>
`, {language: 'html'}).value;

export const DISMISS_CALL = hljs.highlight(
  `openWithDismiss(): void {
  this.modalService.createModal(DismissModalComponent, {defaultDismiss: true});
}`, {language: 'ts'}).value;

export const DISMISS_MODAL_TS = hljs.highlight(
  `export class DismissModalComponent implements OnInit {

  constructor(private modalRef: ModalRef<DismissModalComponent>) { }

  ngOnInit(): void {
  }

}
`, {language: 'ts'}).value;

export const DISMISS_MODAL_HTML = hljs.highlight(
  `<h5 class="modal-title">Dismissible Modal</h5>
<p>This option just allows you to activate the close-button in the top-left</p>
`, {language: 'html'}).value;

export const DATA_INPUT_CALL = hljs.highlight(
  `openWithCustomData(): void {
  this.modalService.createModal(DataInputModalComponent, {data: {test: 'Hello I am a test'}});
}
`, {language: 'ts'}).value;

export const DATA_INPUT_MODAL_TS = hljs.highlight(
  `export class DataInputModalComponent implements OnInit {

  constructor(private modalRef: ModalRef<DataInputModalComponent>, @Inject(MODAL_DATA) private data: Test) { }

  ngOnInit(): void {
  }

  get testData(): string {
    return this.data.test;
  }
}
`, {language: 'ts'}).value;

export const DATA_INPUT_MODAL_HTML = hljs.highlight(
  `<h5 class="modal-title">Modal with Data send to the modal</h5>
<p>
  {{testData}}
</p>
`, {language: 'html'}).value;
