import { ColumnType } from "../enums/column-type.enum";

export interface Card {
    id?: string,
    titulo : string,
    conteudo: string,
    lista: ColumnType
}
