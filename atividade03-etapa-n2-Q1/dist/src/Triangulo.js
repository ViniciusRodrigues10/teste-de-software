"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Triangulo {
    constructor(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    ehEquilatero() {
        return this.ladoA == this.ladoB && this.ladoA == this.ladoC;
    }
    ehIsosceles() {
        if (this.ladoA == this.ladoB && this.ladoA != this.ladoC)
            return true;
        if (this.ladoA == this.ladoC && this.ladoA != this.ladoB)
            return true;
        if (this.ladoB == this.ladoC && this.ladoB != this.ladoA)
            return true;
        return false;
    }
    ehEscaleno() {
        return (this.ladoA != this.ladoB && this.ladoA != this.ladoC && this.ladoB != this.ladoC);
    }
    ehPossivelExistir() {
        if (this.ladoA + this.ladoB > this.ladoC && this.ladoA + this.ladoC > this.ladoB
            && this.ladoB + this.ladoC > this.ladoA)
            return true;
        return false;
    }
    ladosPossitivos() {
        if (this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0)
            return true;
        return false;
    }
    classificaTriangulo() {
        if (!this.ehPossivelExistir() || !this.ladosPossitivos())
            return "Triangulo não existe";
        if (this.ehEquilatero())
            return "Equilátero";
        if (this.ehEscaleno())
            return "Escaleno";
        return "Isósceles";
    }
    calculaParimetro() {
        if (this.ehPossivelExistir() || this.ladosPossitivos())
            return this.ladoA + this.ladoB + this.ladoC;
        return 0;
    }
}
exports.default = Triangulo;
