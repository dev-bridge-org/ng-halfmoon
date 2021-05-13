import {Component, DebugElement} from "@angular/core";
import {Sizing} from "../../utils";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {SelectDirective} from "./select.directive";
import {TestUtils} from "../../utils/test-utils";

@Component({
  template: `
    <select hmSelect [sizing]="sizing" [(ngModel)]="testModel" [required]="required">
      <option [value]="null">please select...</option>
      <option value="test">Test</option>
    </select>
  `
})
class SelectTestComponent {
  sizing: Sizing = undefined;
  testModel: string;
  required: boolean = false;
}

function dispatchSelectEvent(fixture: ComponentFixture<SelectTestComponent>, input: string): void {
  const el = TestUtils.getElementByDirective(fixture, By.directive(SelectDirective)).nativeElement;
  el.value = input;
  el.dispatchEvent(new Event('change'));
}

describe('SelectDirective', () => {
  let fixture: ComponentFixture<SelectTestComponent>;
  let component: SelectTestComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectDirective, SelectTestComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('sizing', () => {
    it('should apply no size class', () => {
      fixture.detectChanges();
      expect(TestUtils.getElementByDirective(fixture, By.directive(SelectDirective)).nativeElement.classList.contains('form-control-lg')).toEqual(false);
      expect(TestUtils.getElementByDirective(fixture, By.directive(SelectDirective)).nativeElement.classList.contains('form-control-sm')).toEqual(false);
    });
    it('should apply "form-control-lg"', () => {
      component.sizing = 'lg';
      fixture.detectChanges();
      expect(TestUtils.getElementByDirective(fixture, By.directive(SelectDirective)).nativeElement.classList.contains('form-control-lg')).toEqual(true);
    });
    it('should apply "form-control-sm"', () => {
      component.sizing = 'sm';
      fixture.detectChanges();
      expect(TestUtils.getElementByDirective(fixture, By.directive(SelectDirective)).nativeElement.classList.contains('form-control-sm')).toEqual(true);
    });
  });
  describe('validation', () => {
    it('should add no "is-invalid" to the field', () => {
      component.required = false;
      fixture.detectChanges();
      dispatchSelectEvent(fixture, '');
      fixture.detectChanges();
      const classes = TestUtils.getElementByDirective(fixture, By.directive(SelectDirective)).nativeElement.classList;
      expect(classes.contains('is-invalid')).toEqual(false);
    });

    it('should add "is-invalid" to the field when field is required', () => {
      component.required = true;
      fixture.detectChanges();
      dispatchSelectEvent(fixture, '');
      fixture.detectChanges();
      const classes = TestUtils.getElementByDirective(fixture, By.directive(SelectDirective)).nativeElement.classList;
      expect(classes.contains('is-invalid')).toEqual(true);
    });
  });
});
