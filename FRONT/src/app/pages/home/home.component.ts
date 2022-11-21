import { KanbanService } from './../../services/kanban.service';
import { Component, OnInit } from '@angular/core';
import { ColumnType } from 'src/app/enums/column-type.enum';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(public kanbanService: KanbanService) { }

  onClickAdd() {
    this.kanbanService.openDialog(this.addCard.bind(this));
  }
  ngOnInit(): void {
    this.kanbanService.sign({ "login": "letscode", "senha": "lets@123" }).subscribe({ next: () => this.getCardlist() })
  }
  addCard(card: Card) {
    this.kanbanService.addCard(card).subscribe({ next: () => this.getCardlist() })
  }

  getCardlist() {
    this.kanbanService.getCardlist().subscribe({ next: (res) => this.kanbanService.cardList = res })
  }

  updateCard() {
    this.kanbanService.updateCard({ conteudo: "modificado", id: "199c1552-d1c0-4627-b219-4e4890c88fe6", lista: ColumnType.DONE, titulo: "primeiro card" }).subscribe({ next: () => this.getCardlist() }
    )
  }
}




