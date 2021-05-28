import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class ModalRef<T = any> {
  modalId: string;
  close: () => void;
  afterClosed: EventEmitter<any> = new EventEmitter<any>();
}
