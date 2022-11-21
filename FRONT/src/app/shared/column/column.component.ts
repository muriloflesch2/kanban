import { KanbanService } from './../../services/kanban.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input()
  columnName!: string;

  constructor(public kanbanService: KanbanService) { }
}
