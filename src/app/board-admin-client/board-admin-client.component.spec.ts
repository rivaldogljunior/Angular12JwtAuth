import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminClientComponent } from './board-admin-client.component';

describe('BoardAdminClientComponent', () => {
  let component: BoardAdminClientComponent;
  let fixture: ComponentFixture<BoardAdminClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
