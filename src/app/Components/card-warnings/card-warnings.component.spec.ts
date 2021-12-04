import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWarningsComponent } from './card-warnings.component';

describe('CardWarningsComponent', () => {
  let component: CardWarningsComponent;
  let fixture: ComponentFixture<CardWarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWarningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
