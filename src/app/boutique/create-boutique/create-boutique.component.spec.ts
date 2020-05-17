import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoutiqueComponent } from './create-boutique.component';

describe('CreateBoutiqueComponent', () => {
  let component: CreateBoutiqueComponent;
  let fixture: ComponentFixture<CreateBoutiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBoutiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
