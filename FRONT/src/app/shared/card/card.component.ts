import { Card } from './../../models/card.model';
import { KanbanService } from './../../services/kanban.service';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnChanges {
  @Input()
  cardData!: Card;

  nextDisabled: boolean;
  beforeDisabled: boolean;
  check: boolean

  constructor(private kanbanService: KanbanService) { }

  ngOnChanges(): void {
    const currentPosition = this.kanbanService.columnTitles.findIndex(title => this.cardData.lista == title);

    if (currentPosition == 2)
      this.nextDisabled = true;

    if (currentPosition == 0)
      this.beforeDisabled = true;
  }

  onClickRemove() {
    console.log('clicou:', this.cardData.id)
    this.kanbanService.deleteCard(this.cardData.id).subscribe({
      next: () => this.kanbanService.cardList = this.kanbanService.cardList.filter(card => card.id != this.cardData.id)
    }
    )
  }

  onClickBefore() {
    this.updateColumn(-1)
  }

  onClickNext() {
    this.updateColumn(1)
  }

  onClickEdit() {
    this.kanbanService.openDialog(this.updateContent.bind(this), this.cardData)
  }

  updateContent(content: Card) {
    this.kanbanService.updateCard(content).subscribe(
      {
        next: (res) => {
          this.cardData.lista = res.lista;
          console.log(res)

        },
        error: (err) => { console.log(err) },
      }
    )
  }

  updateColumn(num: number) {
    const currentPosition = this.kanbanService.columnTitles.findIndex(title => this.cardData.lista == title);
    this.kanbanService.updateCard({ id: this.cardData.id, titulo: this.cardData.titulo, conteudo: this.cardData.conteudo, lista: this.kanbanService.columnTitles[currentPosition + num] }).subscribe(
      {
        next: (res) => {
          this.cardData.lista = res.lista;
          console.log(res)

        },
        error: (err) => { console.log(err) },
      }
    )
  }
}
