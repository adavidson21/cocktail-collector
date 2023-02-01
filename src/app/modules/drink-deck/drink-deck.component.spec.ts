import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkDeckComponent } from './drink-deck.component';

describe('DrinkDeckComponent', () => {
  let component: DrinkDeckComponent;
  let fixture: ComponentFixture<DrinkDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
