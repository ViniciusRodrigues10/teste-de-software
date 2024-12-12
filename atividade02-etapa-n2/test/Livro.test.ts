import Livro from "../src/Livro";

test("Deve retornar o nome correto do livro", function () {
    const livro = new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9");
    const nome = livro.getNome;
    expect(nome).toBe("Calculo 1")
});

test("Deve alterar o nome corretamente do livro", function () {
    const livro = new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9");
    livro.setNome = "Clean Architecture";
    const nome = livro.getNome;
    expect(nome).toBe("Clean Architecture")
});

test("Deve retornar a edição correta do livro", function () {
    const livro = new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9");
    const edicao = livro.getEdicao;
    expect(edicao).toBe(2023)
});

test("Deve alterar a edição do livro corretamente", function () {
    const livro = new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9");
    livro.setEdicao = 2022;
    const edicao = livro.getEdicao;
    expect(edicao).toBe(2022)
});

test("Deve retornar o nome correto do autor do livro", function () {
    const livro = new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9");
    const autor = livro.getAutor;
    expect(autor).toBe("Thomas")
});

test("Deve alterar o nome corretamente do autor do livro", function () {
    const livro = new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9");
    livro.setAutor = "Joel";
    const autor = livro.getAutor;
    expect(autor).toBe("Joel")
});

test("Deve retornar o isbn correto do livro", function () {
    const livro = new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9");
    const isbn = livro.getIsbn;
    expect(isbn).toBe("890-42-23456-73-9")
});

test("Deve alterar o isbn corretamente do livro", function () {
    const livro = new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9");
    livro.setIsbn = "111-22-33333-44-5";
    const nome = livro.getIsbn;
    expect(nome).toBe("111-22-33333-44-5")
});

test("Deve retornar TRUE: edião maior que 2022", function () {
    const livro = new Livro("Calculo 1", 2023, "Thomas", "890-42-23456-73-9");
    const lancamento = livro.verificaLancamento();
    expect(lancamento).toBeTruthy();
});

test("Deve retornar FALSE: edião menor que 2022", function () {
    const livro = new Livro("Calculo 1", 2021, "Thomas", "890-42-23456-73-9");
    const lancamento = livro.verificaLancamento();
    expect(lancamento).toBeFalsy();
});

test("Deve retornar FALSE: edião igual a 2022", function () {
    const livro = new Livro("Calculo 1", 2022, "Thomas", "890-42-23456-73-9");
    const lancamento = livro.verificaLancamento();
    expect(lancamento).toBeFalsy();
});