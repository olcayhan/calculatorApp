import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleBarComponent } from './toogle-bar.component';

describe('ToogleBarComponent', () => {
  let component: ToogleBarComponent;
  let fixture: ComponentFixture<ToogleBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToogleBarComponent]
    });
    fixture = TestBed.createComponent(ToogleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
