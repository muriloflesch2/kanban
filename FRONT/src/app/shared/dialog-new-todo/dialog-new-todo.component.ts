import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data.model';

@Component({
  selector: 'app-dialog-new-todo',
  templateUrl: './dialog-new-todo.component.html',
  styleUrls: ['./dialog-new-todo.component.scss']
})
export class DialogNewTodoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogNewTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

