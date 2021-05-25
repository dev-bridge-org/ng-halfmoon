import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContainerComponent } from './select-container.component';
import {Component, DebugElement} from "@angular/core";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {ErrorComponent} from "../../error/error.component";
import {HintComponent} from "../../hint/hint.component";
import {By} from "@angular/platform-browser";
import {SelectDirective} from "../select.directive";

@Component({
  template: `
    <hm-select-container>
      <label for="firstname">Firstname</label>
      <select hmSelect [formControl]="specialization">
        <option value="frontend">Frontend</option>
      </select>
      <hm-error *ngIf="specialization.hasError('required')">Field is required!</hm-error>
      <hm-hint>Select your specialization</hm-hint>
    </hm-select-container>
  `
})
class SelectContainerTestComponent {
  specialization = new FormControl('', Validators.required);
}

function queryContainer(debugElement: DebugElement): DebugElement {
  return debugElement.query(By.css('hm-select-container'));
}

describe('SelectContainerComponent', () => {
  let component: SelectContainerTestComponent;
  let fixture: ComponentFixture<SelectContainerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SelectContainerComponent,
        SelectContainerTestComponent,
        ErrorComponent,
        HintComponent,
        SelectDirective
      ],
      imports: [
        ReactiveFormsModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContainerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have class "form-group" added to the container', () => {
    expect(queryContainer(fixture.debugElement).nativeElement.classList.contains('form-group')).toEqual(true);
  });

  it('should change to invalid once touched and required', () => {
    component.specialization.markAsTouched();
    component.specialization.patchValue('Test');
    component.specialization.patchValue('');
    fixture.detectChanges();
    expect(queryContainer(fixture.debugElement).nativeElement.classList.contains('is-invalid')).toEqual(true);
  })
});
