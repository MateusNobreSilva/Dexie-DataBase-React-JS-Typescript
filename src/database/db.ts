// db.ts
import Dexie, { Table } from 'dexie';

export interface Livro {
    id?: number;
    name: string;
    author: string;
    descricao: string;
    pages: number;
    imagem: string;
}

export class MySubClassedDexie extends Dexie {
    // 'friends' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    livros!: Table<Livro>;

    constructor() {
        super('myDatabase');
        this.version(1).stores({
            livros: '++id, name,author, descricao, pages, imagem' // Primary key and indexed props
        });
    }
}

export const db = new MySubClassedDexie();