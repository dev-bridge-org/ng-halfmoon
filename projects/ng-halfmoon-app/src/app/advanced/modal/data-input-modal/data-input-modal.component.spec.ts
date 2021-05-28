import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInputModalComponent } from './data-input-modal.component';

describe('DataInputModalComponent', () => {
  let component: DataInputModalComponent;
  let fixture: ComponentFixture<DataInputModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInputModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataInputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
