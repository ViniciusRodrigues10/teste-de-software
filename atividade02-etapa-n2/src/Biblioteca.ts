import Livro from "./Livro";

export default class Biblioteca {
    private listaLivros: Livro[] = [];
    private nome: string;
    private cnpj: string;
    private anoFundacao: number;

    constructor(nome: string, cnpj: string, anoFundacao: number) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.anoFundacao = anoFundacao
    }

    get getNome(): String {
        return this.nome;
    }

    get getCnpj(): String {
        return this.cnpj
    }

    get getAnoFundacao(): Number {
        return this.anoFundacao
    } 

    set setNome(nome: string) {
        this.nome = nome;
    }

    set setCnpj(cnpj: string) {
        this.cnpj = cnpj
    }

    set setAnoFundacao(anoFundacao:number) {
        this.anoFundacao = anoFundacao
    } 

    patrimonioHistorico(): Boolean {
        if(this.anoFundacao < 1950) return true;
        return false;
    }

    consultarLivros(): Livro[] {
        return this.listaLivros;
    }

    incluirLivro(livro: Livro) {
        this.listaLivros.push(livro);
    }

    removerLivro(isbn: string): Boolean {
        const index = this.listaLivros.findIndex((livro) => livro.getIsbn === isbn);
        if (index !== -1) {
            this.listaLivros.splice(index, 1);
            return true;
        }
        return false;
    }

    acervoPremium(ano: number = new Date().getFullYear()): Boolean {
        const lancamento = this.listaLivros.filter((livro) => livro.getEdicao >= ano)
        return lancamento.length >= 5;
    }
}