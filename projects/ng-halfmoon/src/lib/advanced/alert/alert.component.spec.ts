import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertComponent} from './alert.component';
import {Component, DebugElement} from '@angular/core';
import {Appearance} from '../../utils';
import {By} from '@angular/platform-browser';

@Component({
  template: `<hm-alert [appearance]="appearance" [dismissable]="dismissable">
    <h4 class="alert-heading">Test alert</h4>
    This is just some plain text inside the alert
  </hm-alert>`
})
class AlertTestComponent {
  appearance: Appearance = undefined;
  dismissable: boolean = false;
}

function queryContainer(debugElement: DebugElement): DebugElement {
  return debugElement.query(By.css('hm-alert'));
}

describe('AlertComponent', () => {
  let component: AlertTestComponent;
  let fixture: ComponentFixture<AlertTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertTestComponent, AlertComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(queryContainer(fixture.debugElement)).toBeTruthy();
  });

  it('should add base-class "alert" to the alert', () => {
    expect(
      queryContainer(fixture.debugElement).nativeElement.classList.contains(
        'alert'
      )
    ).toEqual(true);
  });

  describe('appearance', () => {
    it('should add "alert-primary" to the alert', () => {
      component.appearance = 'primary';
      fixture.detectChanges();

      expect(
        queryContainer(fixture.debugElement).nativeElement.classList.contains(
          'alert-primary'
        )
      ).toEqual(true);
    });
    it('should add "alert-secondary" to the alert', () => {
      component.appearance = 'secondary';
      fixture.detectChanges();

      expect(
        queryContainer(fixture.debugElement).nativeElement.classList.contains(
          'alert-secondary'
        )
      ).toEqual(true);
    });
    it('should add "alert-success" to the alert', () => {
      component.appearance = 'success';
      fixture.detectChanges();

      expect(
        queryContainer(fixture.debugElement).nativeElement.classList.contains(
          'alert-success'
        )
      ).toEqual(true);
    });
    it('should add "alert-danger" to the alert', () => {
      component.appearance = 'danger';
      fixture.detectChanges();

      expect(
        queryContainer(fixture.debugElement).nativeElement.classList.contains(
          'alert-danger'
        )
      ).toEqual(true);
    });
  });

  describe('dismissable', () => {
    it('should show dismissable button', () => {
      component.dismissable = true;
      fixture.detectChanges();

      expect(
        queryContainer(fixture.debugElement).query(By.css('.close')).name
      ).toEqual('button');
    });

    it('should not show dismissable button', () => {
      expect(
        queryContainer(fixture.debugElement).query(By.css('.close'))
      ).toBeNull();
    });
  });
});
