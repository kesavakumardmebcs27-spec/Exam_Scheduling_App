import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultProcessing } from './result-processing';

describe('ResultProcessing', () => {
  let component: ResultProcessing;
  let fixture: ComponentFixture<ResultProcessing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultProcessing],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultProcessing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
