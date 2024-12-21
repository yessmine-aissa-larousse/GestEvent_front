import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEvenementComponent } from './ajouter-evenement.component';

describe('AjouterEvenementComponent', () => {
  let component: AjouterEvenementComponent;
  let fixture: ComponentFixture<AjouterEvenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterEvenementComponent]
    });
    fixture = TestBed.createComponent(AjouterEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
