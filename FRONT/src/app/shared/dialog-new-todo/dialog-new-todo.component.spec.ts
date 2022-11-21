import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewTodoComponent } from './dialog-new-todo.component';

describe('DialogNewTodoComponent', () => {
  let component: DialogNewTodoComponent;
  let fixture: ComponentFixture<DialogNewTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
