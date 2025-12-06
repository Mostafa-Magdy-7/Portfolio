import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E } from './e';

describe('E', () => {
  let component: E;
  let fixture: ComponentFixture<E>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
