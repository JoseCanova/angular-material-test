import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootInputComponent } from './boot-input.component';

describe('BootInputComponent', () => {
  let component: BootInputComponent;
  let fixture: ComponentFixture<BootInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
