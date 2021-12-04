import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPreventionComponent } from './card-prevention.component';

describe('CardPreventionComponent', () => {
  let component: CardPreventionComponent;
  let fixture: ComponentFixture<CardPreventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPreventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPreventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
