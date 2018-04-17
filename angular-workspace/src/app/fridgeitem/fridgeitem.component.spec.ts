import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeitemComponent } from './fridgeitem.component';

describe('FridgeitemComponent', () => {
  let component: FridgeitemComponent;
  let fixture: ComponentFixture<FridgeitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
