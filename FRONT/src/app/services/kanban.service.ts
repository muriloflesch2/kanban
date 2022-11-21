import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ColumnType } from '../enums/column-type.enum';
import { Auth } from '../models/auth.model';
import { Card } from '../models/card.model';
import { DialogNewTodoComponent } from '../shared/dialog-new-todo/dialog-new-todo.component';
import { ErrorMessageComponent } from '../shared/error-message/error-message.component';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  public cardList: Card[] = [];
  public columnTitles = [ColumnType.TODO, ColumnType.DOING, ColumnType.DONE];

  private url = 'http://0.0.0.0:5000';
  private durationInSeconds = 5;
  private headers: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  public openSnackBar() {
    this._snackBar.openFromComponent(ErrorMessageComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  public openDialog(calback, currentContent: Card = { titulo: "", conteudo: "", lista: ColumnType.TODO }): void {

    const dialogRef = this.dialog.open(DialogNewTodoComponent, {
      width: '350px',
      data: { title: currentContent.titulo, content: currentContent.conteudo },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result)
        return;

      currentContent.titulo = result.title;
      currentContent.conteudo = result.content;

      console.log('card preenchido: ', currentContent)
      calback(currentContent)

    });

  }

  public sign(body: Auth) {
    return this.http.post(`${this.url}/login/`, body, { headers: this.headers }).pipe(
      map((data: string) => {
        this.headers = this.headers.set('Authorization', `Bearer ${data}`)
      }),
      catchError((err) => {
        this.openSnackBar()
        return throwError(() => { err.error.message })
      })
    )
  }

  public getCardlist(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.url}/cards/`, { headers: this.headers }).pipe(
      catchError((err) => {
        this.openSnackBar()
        return throwError(() => { err.error.message })
      })
    )
  }

  public addCard(card: Card): Observable<Card> {
    return this.http.post<Card>(`${this.url}/cards/`, card, { headers: this.headers }).pipe(
      catchError((err) => {
        this.openSnackBar()
        return throwError(() => { err.error.message })
      }));
  }

  public updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.url}/cards/${card.id}`, card, { headers: this.headers }).pipe(
      catchError((err) => {
        this.openSnackBar()
        return throwError(() => { err.error.message })
      }));
  }

  public deleteCard(id: string): Observable<Card> {
    return this.http.delete<Card>(`${this.url}/cards/${id}`, { headers: this.headers }).pipe(
      catchError((err) => {
        this.openSnackBar()
        return throwError(() => { err.error.message })
      }));
  }
}
