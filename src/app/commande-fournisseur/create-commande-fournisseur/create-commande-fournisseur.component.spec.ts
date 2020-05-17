import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommandeFournisseurComponent } from './create-commande-fournisseur.component';

describe('CreateCommandeFournisseurComponent', () => {
  let component: CreateCommandeFournisseurComponent;
  let fixture: ComponentFixture<CreateCommandeFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommandeFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommandeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
