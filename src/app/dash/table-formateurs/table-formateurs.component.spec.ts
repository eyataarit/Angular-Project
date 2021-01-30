import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFormateursComponent } from './table-formateurs.component';

describe('TableFormateursComponent', () => {
  let component: TableFormateursComponent;
  let fixture: ComponentFixture<TableFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFormateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
