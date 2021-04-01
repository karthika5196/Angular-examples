import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTwoComponent } from './routing-two.component';

describe('RoutingTwoComponent', () => {
  let component: RoutingTwoComponent;
  let fixture: ComponentFixture<RoutingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
