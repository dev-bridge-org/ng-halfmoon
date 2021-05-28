import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOutputModalComponent } from './data-output-modal.component';

describe('DataOutputModalComponent', () => {
  let component: DataOutputModalComponent;
  let fixture: ComponentFixture<DataOutputModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataOutputModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataOutputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
