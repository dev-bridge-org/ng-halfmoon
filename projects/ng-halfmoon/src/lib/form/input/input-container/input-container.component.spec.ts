import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputContainerComponent} from './input-container.component';
import {Component, DebugElement} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ErrorComponent} from '../../error/error.component';
import {HintComponent} from '../../hint/hint.component';
import {InputDirective} from '../input.directive';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <hm-input-container>
      <label for="firstname">Firstname</label>
      <input type="text" hmInput [formControl]="firstname" />
      <hm-error *ngIf="firstname.hasError('required')"
        >Field is required!</hm-error
      >
      <hm-hint>only alphabetic characters allowed</hm-hint>
    </hm-input-container>
  `
})
class InputContainerTestComponent {
  firstname = new FormControl('', Validators.required);
}

function queryContainer(debugElement: DebugElement): DebugElement {
  return debugElement.query(By.css('hm-input-container'));
}

describe('InputContainerComponent', () => {
  let component: InputContainerTestComponent;
  let fixture: ComponentFixture<InputContainerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InputContainerComponent,
        InputContainerTestComponent,
        ErrorComponent,
        HintComponent,
        InputDirective
      ],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputContainerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have class "form-group" added to the container', () => {
    expect(
      queryContainer(fixture.debugElement).nativeElement.classList.contains(
        'form-group'
      )
    ).toEqual(true);
  });

  it('should change to invalid once touched and required', () => {
    component.firstname.markAsTouched();
    component.firstname.patchValue('Test');
    component.firstname.patchValue('');
    fixture.detectChanges();
    expect(
      queryContainer(fixture.debugElement).nativeElement.classList.contains(
        'is-invalid'
      )
    ).toEqual(true);
  });
});
