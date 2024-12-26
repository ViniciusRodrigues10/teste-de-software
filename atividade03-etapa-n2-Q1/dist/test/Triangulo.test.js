"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Triangulo_1 = __importDefault(require("../src/Triangulo"));
// ----------------- Atividade 03 etapa n2 -----------------//
test("Deve informar o perímetro do triângulo", () => {
    const triangulo = new Triangulo_1.default(2, 2, 2);
    const perimetroTriangulo = triangulo.calculaParimetro();
    expect(perimetroTriangulo).toBe(6);
});
test("Deve informar que o perímetro do triângulo é 0 pois um lado do triangulo é 0", () => {
    const triangulo = new Triangulo_1.default(3, 0, 12);
    const perimetroTriangulo = triangulo.calculaParimetro();
    expect(perimetroTriangulo).toBe(0);
});
test("Deve informar que o perímetro do triângulo é pois dois lados do triangulo são 0", () => {
    const triangulo = new Triangulo_1.default(0, 0, 12);
    const perimetroTriangulo = triangulo.calculaParimetro();
    expect(perimetroTriangulo).toBe(0);
});
test("Deve informar que o perímetro do triângulo é 0 pois um lado é negativo", () => {
    const triangulo = new Triangulo_1.default(-3, 7, 12);
    const perimetroTriangulo = triangulo.calculaParimetro();
    expect(perimetroTriangulo).toBe(0);
});
test("Deve informar que o perímetro do triângulo é 0 pois dois lados são negativos", () => {
    const triangulo = new Triangulo_1.default(-3, -7, 12);
    const perimetroTriangulo = triangulo.calculaParimetro();
    expect(perimetroTriangulo).toBe(0);
});
test("Deve informar que o perímetro do triângulo é 0 pois três lados são negativos", () => {
    const triangulo = new Triangulo_1.default(-3, -7, -12);
    const perimetroTriangulo = triangulo.calculaParimetro();
    expect(perimetroTriangulo).toBe(0);
});
// ----------------- Atividade 03 etapa n2 -----------------//
// Triângulo equilátero válido
test("Deve informar que o triangulo é equilátero", () => {
    const triangulo = new Triangulo_1.default(2, 2, 2);
    const classificacaoTriangulo = triangulo.classificaTriangulo();
    expect(classificacaoTriangulo).toBe("Equilátero");
});
// Triângulo escaleno válido
test("Deve informar que o triangulo é escaleno", () => {
    const triangulo = new Triangulo_1.default(5, 9, 10);
    const classificacaoTriangulo = triangulo.classificaTriangulo();
    expect(classificacaoTriangulo).toBe("Escaleno");
});
// Triângulo isósceles válido
test("Deve informar que o triangulo é isósceles", () => {
    const triangulo = new Triangulo_1.default(2, 2, 3);
    const classificacaoTriangulo = triangulo.classificaTriangulo();
    expect(classificacaoTriangulo).toBe("Isósceles");
});
// Lado informado pelo usuário com valor zero
test("Deve informar que o triangulo não existe, lado = 0", () => {
    const triangulo = new Triangulo_1.default(0, 7, 12);
    const classificacaoTriangulo = triangulo.classificaTriangulo();
    expect(classificacaoTriangulo).toBe("Triangulo não existe");
});
// Lado informado pelo usuário com valor negativo
test("Deve informar que o triangulo não existe, lado negativo", () => {
    const triangulo = new Triangulo_1.default(4, -1, 12);
    const classificacaoTriangulo = triangulo.classificaTriangulo();
    expect(classificacaoTriangulo).toBe("Triangulo não existe");
});
// Situação onde a soma de 2 lados é igual ao terceiro lado
test("Deve informar que o triangulo não existe, soma de dois lados é igual ao terceiro lado", () => {
    const triangulo = new Triangulo_1.default(4, 8, 12);
    const classificacaoTriangulo = triangulo.classificaTriangulo();
    expect(classificacaoTriangulo).toBe("Triangulo não existe");
});
// Testes adicionais desemvolvido com TDD
test("Deve retornar true para o triangulo é equilátero", () => {
    const triangulo = new Triangulo_1.default(3, 3, 3);
    const trianguloEquilatero = triangulo.ehEquilatero();
    expect(trianguloEquilatero).toBe(true);
});
test("Deve retornar false para o triangulo equilátero", () => {
    const triangulo = new Triangulo_1.default(2, 3, 3);
    const trianguloEquilatero = triangulo.ehEquilatero();
    expect(trianguloEquilatero).toBe(false);
});
test("Deve retornar true para o triangulo isósceles(lado A diferenete)", () => {
    const triangulo = new Triangulo_1.default(2, 3, 3);
    const trianguloIsosceles = triangulo.ehIsosceles();
    expect(trianguloIsosceles).toBe(true);
});
test("Deve retornar true para o triangulo isósceles(lado B diferenete)", () => {
    const triangulo = new Triangulo_1.default(3, 2, 3);
    const trianguloIsosceles = triangulo.ehIsosceles();
    expect(trianguloIsosceles).toBe(true);
});
test("Deve retornar true para o triangulo isósceles(lado C diferenete)", () => {
    const triangulo = new Triangulo_1.default(3, 3, 2);
    const trianguloIsosceles = triangulo.ehIsosceles();
    expect(trianguloIsosceles).toBe(true);
});
test("Deve retornar false para o triangulo isósceles", () => {
    const triangulo = new Triangulo_1.default(3, 3, 3);
    const trianguloIsosceles = triangulo.ehIsosceles();
    expect(trianguloIsosceles).toBe(false);
});
test("Deve retornar true para o triangulo escaleno", () => {
    const triangulo = new Triangulo_1.default(1, 2, 3);
    const trianguloEscaleno = triangulo.ehEscaleno();
    expect(trianguloEscaleno).toBe(true);
});
test("Deve retornar false para o triangulo escaleno", () => {
    const triangulo = new Triangulo_1.default(1, 2, 2);
    const trianguloEscaleno = triangulo.ehEscaleno();
    expect(trianguloEscaleno).toBe(false);
});
test("Não deve ser possível existir o triangulo", () => {
    const triangulo = new Triangulo_1.default(3, 6, 11);
    const existenciaTriangulo = triangulo.ehPossivelExistir();
    expect(existenciaTriangulo).toBe(false);
});
test("Deve ser possível existir o triangulo", () => {
    const triangulo = new Triangulo_1.default(4, 7, 12);
    const existenciaTriangulo = triangulo.ehPossivelExistir();
    expect(existenciaTriangulo).toBe(false);
});
test("Deve informar que não possui lados <= 0", () => {
    const triangulo = new Triangulo_1.default(4, 7, 12);
    const ladosPossitivos = triangulo.ladosPossitivos();
    expect(ladosPossitivos).toBe(true);
});
test("Deve informar que possui lados = 0", () => {
    const triangulo = new Triangulo_1.default(0, 7, 12);
    const ladosPossitivos = triangulo.ladosPossitivos();
    expect(ladosPossitivos).toBe(false);
});
test("Deve informar que possui lados negativos", () => {
    const triangulo = new Triangulo_1.default(3, -7, 12);
    const ladosPossitivos = triangulo.ladosPossitivos();
    expect(ladosPossitivos).toBe(false);
});
test("Deve informar que o triangulo não existe, condição de exitência não satisfeita", () => {
    const triangulo = new Triangulo_1.default(3, 6, 11);
    const classificacaoTriangulo = triangulo.classificaTriangulo();
    expect(classificacaoTriangulo).toBe("Triangulo não existe");
});
