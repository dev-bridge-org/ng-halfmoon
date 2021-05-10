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
});
