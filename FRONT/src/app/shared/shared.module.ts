import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { ColumnComponent } from './column/column.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogNewTodoComponent } from './dialog-new-todo/dialog-new-todo.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessageComponent } from './error-message/error-message.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MarkdownComponent } from './markdown/markdown.component';
@NgModule({
  declarations: [ CardComponent, ColumnComponent, DialogNewTodoComponent, ErrorMessageComponent,MarkdownComponent ],
  exports: [CardComponent,ColumnComponent, DialogNewTodoComponent,ErrorMessageComponent,MarkdownComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule

  ]
})
export class SharedModule { }
