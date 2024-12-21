import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEvenementComponent } from './liste-evenement.component';

describe('ListeEvenementComponent', () => {
  let component: ListeEvenementComponent;
  let fixture: ComponentFixture<ListeEvenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEvenementComponent]
    });
    fixture = TestBed.createComponent(ListeEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
