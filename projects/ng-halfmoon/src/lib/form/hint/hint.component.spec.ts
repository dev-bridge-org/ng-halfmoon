import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HintComponent} from './hint.component';

describe('HintComponent', () => {
  let component: HintComponent;
  let fixture: ComponentFixture<HintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HintComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add class "form-text" by default', () => {
    expect(component.baseClass).toEqual(true);
    expect(fixture.nativeElement.classList.contains('form-text')).toEqual(true);
  });
});
