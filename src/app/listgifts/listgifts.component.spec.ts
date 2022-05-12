import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgiftsComponent } from './listgifts.component';

describe('ListgiftsComponent', () => {
  let component: ListgiftsComponent;
  let fixture: ComponentFixture<ListgiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListgiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
