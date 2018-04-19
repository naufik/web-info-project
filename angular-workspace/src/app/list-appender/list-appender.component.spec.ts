import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppenderComponent } from './list-appender.component';

describe('ListAppenderComponent', () => {
  let component: ListAppenderComponent;
  let fixture: ComponentFixture<ListAppenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAppenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
