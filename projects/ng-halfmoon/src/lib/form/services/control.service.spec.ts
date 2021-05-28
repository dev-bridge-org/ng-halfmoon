import {TestBed, waitForAsync} from '@angular/core/testing';

import {ControlService, ControlStatus} from './control.service';
import {FormControl, Validators} from '@angular/forms';

describe('ControlService', () => {
  let service: ControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlService]
    });
    service = TestBed.inject(ControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should initialize correctly',
    waitForAsync(() => {
      service.currentStatus$.subscribe((currentStatus) => {
        expect(currentStatus).toEqual(ControlStatus.NONE);
      });

      service.init(new FormControl('', Validators.required));

      expect(service.currentControl).not.toBeNull();
      expect(service.currentControl).not.toBeUndefined();
    })
  );

  it(
    'should have invalid-state once touched and required',
    waitForAsync(() => {
      service.currentStatus$.subscribe((currentStatus) => {
        expect(currentStatus).toEqual(ControlStatus.INVALID);
      });

      const control = new FormControl('', Validators.required);
      control.markAsTouched();

      service.init(control);
    })
  );

  it(
    'should have valid-state once touched and with no validations',
    waitForAsync(() => {
      service.currentStatus$.subscribe((currentStatus) => {
        expect(currentStatus).toEqual(ControlStatus.VALID);
      });

      const control = new FormControl('');
      control.markAsTouched();

      service.init(control);
    })
  );
});
