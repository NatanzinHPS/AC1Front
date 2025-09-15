import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoMedia } from './calculo-media';

describe('CalculoMedia', () => {
  let component: CalculoMedia;
  let fixture: ComponentFixture<CalculoMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculoMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
