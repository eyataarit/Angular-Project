import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSessionsComponent } from './table-sessions.component';

describe('TableSessionsComponent', () => {
  let component: TableSessionsComponent;
  let fixture: ComponentFixture<TableSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
