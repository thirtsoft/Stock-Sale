import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovisionnementComponent } from './approvisionnement.component';

describe('ApprovisionnementComponent', () => {
  let component: ApprovisionnementComponent;
  let fixture: ComponentFixture<ApprovisionnementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovisionnementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovisionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
