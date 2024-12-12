import Biblioteca from "../src/Biblioteca";
import Livro from "../src/Livro";

test("Deve retornar o nome correto da biblioteca", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1942);
    const nomeBiblioteca = biblioteca.getNome;
    expect(nomeBiblioteca).toBe("Biblioteca Municipal Félix Araújo");
});

test("Deve alterar o nome corretamente da biblioteca", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1942);
    biblioteca.setNome = "Biblioteca Alfredo Dantes";
    const nomeBiblioteca = biblioteca.getNome;
    expect(nomeBiblioteca).toBe("Biblioteca Alfredo Dantes");
});

test("Deve retornar o cnpj correto da biblioteca", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1942);
    const cnpjBiblioteca = biblioteca.getCnpj;
    expect(cnpjBiblioteca).toBe("11.222.333/4444-55");
});

test("Deve alterar o cnpj corretamente da biblioteca", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1942);
    biblioteca.setCnpj = "00.000.000/0000-00";
    const cnpjBiblioteca = biblioteca.getCnpj;
    expect(cnpjBiblioteca).toBe("00.000.000/0000-00");
});

test("Deve retornar o ano de fundação correto da biblioteca", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1942);
    const anoFundacaoBiblioteca = biblioteca.getAnoFundacao;
    expect(anoFundacaoBiblioteca).toBe(1942);
});

test("Deve alterar o ano de fundação corretamente da biblioteca", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1942);
    biblioteca.setAnoFundacao = 1950;
    const anoFundacaoBiblioteca = biblioteca.getAnoFundacao;
    expect(anoFundacaoBiblioteca).toBe(1950);
});

test("Deve retornar TRUE: ano de fundação menor que 1980", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1942);
    const ehPatrimonioHistorico = biblioteca.patrimonioHistorico();
    expect(ehPatrimonioHistorico).toBeTruthy();
})

test("Deve retornar FALSE: ano de fundação maior que 1980", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1990);
    const ehPatrimonioHistorico = biblioteca.patrimonioHistorico();
    expect(ehPatrimonioHistorico).toBeFalsy();
})

test("Deve retornar FALSE: ano de fundação igual a 2022", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1980);
    const ehPatrimonioHistorico = biblioteca.patrimonioHistorico();
    expect(ehPatrimonioHistorico).toBeFalsy();
})

test("Incluir um livro na lista", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1980);
    biblioteca.incluirLivro(new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9"));
    const totalLivors = biblioteca.consultarLivros().length;
    expect(totalLivors).toBe(1);
})

test("Verificar se a lista está vazia depois de excluir o livro(lista com um livro)", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1980);
    biblioteca.incluirLivro(new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9"));
    biblioteca.removerLivro("890-42-23456-73-9");
    const totalLivors = biblioteca.consultarLivros().length;
    expect(totalLivors).toBe(0);
})

test("Deve retornar TRUE para acervoPremium com 5 lançamentos no ano atua", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1980);
    biblioteca.incluirLivro(new Livro("Clean Architecture", 2024, "Robert Cecil Martin", "890-42-23456-73-9"));
    biblioteca.incluirLivro(new Livro("Clean Architecture", 2024, "Robert Cecil Martin", "890-42-23456-73-9"));
    biblioteca.incluirLivro(new Livro("Clean Architecture", 2024, "Robert Cecil Martin", "890-42-23456-73-9"));
    biblioteca.incluirLivro(new Livro("Clean Architecture", 2024, "Robert Cecil Martin", "890-42-23456-73-9"));
    biblioteca.incluirLivro(new Livro("Clean Architecture", 2024, "Robert Cecil Martin", "890-42-23456-73-9"));
    const ehAcervoPremium = biblioteca.acervoPremium();
    expect(ehAcervoPremium).toBe(true);
})

test("Deve retornar FALSE para acervoPremium com meno de 5 lançamentos no ano atua", function () {
    const biblioteca = new Biblioteca("Biblioteca Municipal Félix Araújo", "11.222.333/4444-55", 1980);
    biblioteca.incluirLivro(new Livro("Clean Architecture", 2024, "Robert Cecil Martin", "890-42-23456-73-9"));
    biblioteca.incluirLivro(new Livro("Clean Architecture", 2024, "Robert Cecil Martin", "890-42-23456-73-9"));
    biblioteca.incluirLivro(new Livro("Clean Architecture", 2024, "Robert Cecil Martin", "890-42-23456-73-9"));
    biblioteca.incluirLivro(new Livro("Clean Architecture", 2024, "Robert Cecil Martin", "890-42-23456-73-9"));
    const ehAcervoPremium = biblioteca.acervoPremium();
    expect(ehAcervoPremium).toBe(false);
})