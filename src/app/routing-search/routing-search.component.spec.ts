import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSearchComponent } from './routing-search.component';

describe('RoutingSearchComponent', () => {
  let component: RoutingSearchComponent;
  let fixture: ComponentFixture<RoutingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
