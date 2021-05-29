import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ModalRef<T = any> {
  modalId: string;
  close: (data?: any) => void;
  afterClosed: EventEmitter<any> = new EventEmitter<any>();
}
