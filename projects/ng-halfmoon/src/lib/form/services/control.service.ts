import {Injectable, OnDestroy} from '@angular/core';
import {NgControl} from "@angular/forms";
import {Observable, Subject, Subscription} from "rxjs";
import {distinctUntilChanged} from "rxjs/operators";

/**
 * This logic with managing the control-status is adopted from Clarity Design. All props go to their team and contributors
 */
export enum ControlStatus {
  NONE = 'NONE',
  INVALID = 'INVALID',
  VALID = 'VALID'
}

@Injectable()
export class ControlService implements OnDestroy {
  currentControl: NgControl;

  get currentStatus$(): Observable<ControlStatus> {
    return this._currentStatus$.asObservable();
  }

  private _currentStatus$: Subject<ControlStatus> = new Subject<ControlStatus>();
  private subscription: Subscription | undefined;

  constructor() {}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  init(control: NgControl): void {
    this.currentControl = control;
    this.subscription = this.currentControl.statusChanges?.pipe(
      distinctUntilChanged()
    ).subscribe(() => {
      this.triggerStatusChange();
    });
  }

  triggerStatusChange() {
    if (
      (this.currentControl.touched || this.currentControl.dirty)
      && [ControlStatus.INVALID, ControlStatus.VALID].includes(this.currentControl.status as ControlStatus)
    ) {
      this._currentStatus$.next(this.currentControl.status as ControlStatus);
    } else {
      this._currentStatus$.next(ControlStatus.NONE)
    }
  }
}
