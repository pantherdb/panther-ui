import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneAnalysisComponent } from './gene-analysis.component';

describe('GeneAnalysisComponent', () => {
  let component: GeneAnalysisComponent;
  let fixture: ComponentFixture<GeneAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
