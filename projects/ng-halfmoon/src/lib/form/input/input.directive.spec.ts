import {InputDirective} from './input.directive';
import {Component, DebugElement} from "@angular/core";
import {Sizing} from "../../utils";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@Component({
  template: `<input hmInput [size]="size" [(ngModel)]="testModel" [required]="required" />`
})
class InputTestComponent {
  size: Sizing = undefined;
  testModel: string;
  required: boolean = false;
}

function getElementByDirective(fixture: ComponentFixture<InputTestComponent>): DebugElement {
  return fixture.debugElement.query(By.directive(InputDirective));
}

function dispatchInputEvent(fixture: ComponentFixture<InputTestComponent>, input: string): void {
  const el = getElementByDirective(fixture).nativeElement;
  el.value = input;
  el.dispatchEvent(new Event('input'));
}

describe('InputDirective', () => {
  let fixture: ComponentFixture<InputTestComponent>;
  let component: InputTestComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputDirective, InputTestComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('size', () => {
    it('should apply no size class', () => {
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('form-control-lg')).toEqual(false);
      expect(getElementByDirective(fixture).nativeElement.classList.contains('form-control-sm')).toEqual(false);
    });
    it('should apply "form-control-lg"', () => {
      component.size = 'lg';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('form-control-lg')).toEqual(true);
    });
    it('should apply "form-control-sm"', () => {
      component.size = 'sm';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('form-control-sm')).toEqual(true);
    });
  });
  describe('validation', () => {
    it('should add no "is-invalid" to the field', () => {
      component.required = false;
      fixture.detectChanges();
      dispatchInputEvent(fixture, '');
      fixture.detectChanges();
      const classes = getElementByDirective(fixture).nativeElement.classList;
      expect(classes.contains('is-invalid')).toEqual(false);
    });

    it('should add "is-invalid" to the field when field is required', () => {
      component.required = true;
      fixture.detectChanges();
      dispatchInputEvent(fixture, '');
      fixture.detectChanges();
      const classes = getElementByDirective(fixture).nativeElement.classList;
      expect(classes.contains('is-invalid')).toEqual(true);
    });
  });
});
