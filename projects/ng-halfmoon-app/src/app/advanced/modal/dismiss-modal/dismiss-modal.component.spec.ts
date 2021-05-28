import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissModalComponent } from './dismiss-modal.component';

describe('DismissModalComponent', () => {
  let component: DismissModalComponent;
  let fixture: ComponentFixture<DismissModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DismissModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DismissModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
