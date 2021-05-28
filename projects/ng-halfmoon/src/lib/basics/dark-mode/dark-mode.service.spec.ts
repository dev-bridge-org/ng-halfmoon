import {fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import { DarkModeService } from './dark-mode.service';
import {skip, take} from "rxjs/operators";

describe('DarkModeService', () => {
  let service: DarkModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DarkModeService]
    });
    service = TestBed.inject(DarkModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change to dark-mode', waitForAsync(() => {
    service.darkModeEnabled$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(false);
    });

    service.darkModeEnabled$.pipe(skip(1), take(1)).subscribe((value) => {
      expect(value).toEqual(true);
    });

    service.toggleDarkMode();
    service.toggleDarkMode();
  }));

  it('should change to light-mode', waitForAsync(() => {
    service.darkModeEnabled$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(false);
    })

    service.darkModeEnabled$.pipe(skip(1), take(1)).subscribe((value) => {
      expect(value).toEqual(true);
    })
    service.toggleDarkMode();

    service.darkModeEnabled$.pipe(skip(2), take(1)).subscribe((value) => {
      expect(value).toEqual(false);
    })

    service.toggleDarkMode();
  }));
});
