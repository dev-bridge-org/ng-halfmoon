import { Injectable } from '@angular/core';
import * as halfmoon from "halfmoon";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class DarkModeService {
  private _darkModeEnabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get darkModeEnabled$(): Observable<boolean> {
    return this._darkModeEnabled$.asObservable();
  }

  constructor() {
    if(halfmoon.darkModeOn) {
      halfmoon.toggleDarkMode();
    }
  }

  toggleDarkMode(): void {
    halfmoon.toggleDarkMode();
    this._darkModeEnabled$.next(!!halfmoon.darkModeOn);
  }
}
