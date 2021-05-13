import {Injectable, OnDestroy} from '@angular/core';
import {NgControl} from "@angular/forms";
import {Subject, Subscription} from "rxjs";

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
  currentStatus$: Subject<ControlStatus> = new Subject<ControlStatus>();

  subscription: Subscription | undefined;

  constructor() {}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  init(control: NgControl): void {
    this.currentControl = control;
    this.subscription = this.currentControl.statusChanges?.subscribe(() => {
      this.triggerStatusChange();
    });
  }

  triggerStatusChange() {
    if (
      this.currentControl.touched
      && [ControlStatus.INVALID, ControlStatus.VALID].includes(this.currentControl.status as ControlStatus)
    ) {
      this.currentStatus$.next(this.currentControl.status as ControlStatus);
    } else {
      this.currentStatus$.next(ControlStatus.NONE)
    }
  }
}
