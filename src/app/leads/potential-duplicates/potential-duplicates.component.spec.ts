import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialDuplicatesComponent } from './potential-duplicates.component';

describe('PotentialDuplicatesComponent', () => {
  let component: PotentialDuplicatesComponent;
  let fixture: ComponentFixture<PotentialDuplicatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PotentialDuplicatesComponent]
    });
    fixture = TestBed.createComponent(PotentialDuplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
