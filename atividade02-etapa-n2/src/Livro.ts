export default class Livro {
    private nome: string;
    private edicao: number;
    private autor: string;
    private isbn: string;

    constructor(nome: string, edicao: number, autor: string, isbn: string){
        this.nome = nome;
        this.edicao = edicao;
        this.autor = autor;
        this.isbn = isbn;
    }

    get getNome(): String {
        return this.nome;
    }

    get getEdicao(): number {
        return this.edicao;
    }

    get getAutor(): String {
        return this.autor;
    }

    get getIsbn(): String {
        return this.isbn;
    }

    set setNome(nome: string) {
        this.nome = nome;
    }

    set setEdicao(edicao: number) {
        this.edicao = edicao;
    }

    set setAutor(autor: string) {
        this.autor = autor;
    }

    set setIsbn(isbn: string) {
        this.isbn = isbn;
    }

    verificaLancamento(): Boolean {
        if (this.edicao > 2022) return true;
        return false
    }
}