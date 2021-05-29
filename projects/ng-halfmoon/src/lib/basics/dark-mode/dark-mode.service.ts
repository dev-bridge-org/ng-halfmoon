import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import * as halfmoon from 'halfmoon';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class DarkModeService {
  private darkModeOn: boolean = false;
  private _darkModeEnabled$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private readonly renderer: Renderer2;
  private readonly cookieName = 'halfmoon_preferredMode';

  get darkModeEnabled$(): Observable<boolean> {
    return this._darkModeEnabled$.asObservable();
  }

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(document.body, null);
    const cookie = halfmoon.readCookie(this.cookieName);
    if (cookie === 'light-mode') {
      this.darkModeOn = false;
      this._darkModeEnabled$.next(this.darkModeOn);
    } else if (cookie === 'dark-mode') {
      this.darkModeOn = true;
      this._darkModeEnabled$.next(this.darkModeOn);
    }

    this.toggleClass();
  }

  toggleDarkMode(): void {
    this.darkModeOn = !this.darkModeOn;
    this._darkModeEnabled$.next(this.darkModeOn);
    this.toggleCookie();
    this.toggleClass();
  }

  private toggleCookie(): void {
    halfmoon.createCookie(
      this.cookieName,
      this.darkModeOn ? 'dark-mode' : 'light-mode',
      365
    );
  }

  private toggleClass(): void {
    if (this.darkModeOn) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
