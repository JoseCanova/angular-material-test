import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootModalComponent } from './boot-modal.component';

describe('BootModalComponent', () => {
  let component: BootModalComponent;
  let fixture: ComponentFixture<BootModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
