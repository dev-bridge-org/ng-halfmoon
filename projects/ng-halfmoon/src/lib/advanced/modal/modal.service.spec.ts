import {TestBed} from '@angular/core/testing';

import {ModalService} from './modal.service';
import {ModalContainerComponent} from './modal-container/modal-container.component';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';

@Component({template: '<span>Test</span>'})
class TestModalComponent {}

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalContainerComponent, TestModalComponent],
      imports: [BrowserModule],
      providers: [ModalService]
    });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create Modal', () => {
    const modalRef = service.createModal(TestModalComponent);
    expect(modalRef.modalId).toEqual('modal-0');
  });

  it('should create Modal with custom id', () => {
    const modalRef = service.createModal(TestModalComponent, {
      id: 'custom-modal-id'
    });
    expect(modalRef.modalId).toEqual('custom-modal-id');
  });

  it('should call close event', (done) => {
    const modalRef = service.createModal(TestModalComponent);
    const spy = jest.spyOn(modalRef.afterClosed, 'emit');
    modalRef.afterClosed.subscribe(() => {
      expect(spy).toBeCalledTimes(1);
      done();
    });
    modalRef.close();
  });
});
