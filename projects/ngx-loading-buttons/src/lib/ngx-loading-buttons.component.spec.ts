import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoadingButtonsComponent } from './ngx-loading-buttons.component';

describe('NgxLoadingButtonsComponent', () => {
  let component: NgxLoadingButtonsComponent;
  let fixture: ComponentFixture<NgxLoadingButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxLoadingButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoadingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
