import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from "@angular/platform-browser";

import {ModalContainerComponent} from './modal-container.component';
import {ModalRef} from "../modal-ref";

describe('ModalContainerComponent', () => {
  let component: ModalContainerComponent;
  let fixture: ComponentFixture<ModalContainerComponent>;
  let modalRef: ModalRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContainerComponent ],
      providers: [
        {provide: ModalRef, useValue: new ModalRef()}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContainerComponent);
    component = fixture.componentInstance;
    modalRef = TestBed.inject(ModalRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call close method of modalRef', () => {
    modalRef.close = () => {};
    const modalRefSpy = jest.spyOn(modalRef, 'close');
    component.close();
    expect(modalRefSpy).toBeCalledTimes(1);
  })

  it('should add dismissable button', () => {
    component.defaultDismiss = true;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button.close'));
    expect(button.nativeElement.attributes.getNamedItem('aria-label').value).toEqual('Close')
  })
});
