import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationInProgComponent } from './activation-in-prog.component';

describe('ActivationInProgComponent', () => {
  let component: ActivationInProgComponent;
  let fixture: ComponentFixture<ActivationInProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivationInProgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationInProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
