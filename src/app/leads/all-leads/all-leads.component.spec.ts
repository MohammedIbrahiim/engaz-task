import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLeadsComponent } from './all-leads.component';

describe('AllLeadsComponent', () => {
  let component: AllLeadsComponent;
  let fixture: ComponentFixture<AllLeadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllLeadsComponent]
    });
    fixture = TestBed.createComponent(AllLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
