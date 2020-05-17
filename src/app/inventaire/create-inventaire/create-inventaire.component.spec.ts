import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInventaireComponent } from './create-inventaire.component';

describe('CreateInventaireComponent', () => {
  let component: CreateInventaireComponent;
  let fixture: ComponentFixture<CreateInventaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInventaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
