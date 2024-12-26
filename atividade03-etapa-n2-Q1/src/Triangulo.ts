export default class Triangulo {
    constructor(readonly ladoA: number, readonly ladoB: number, readonly ladoC: number) {}
  
    ehEquilatero(): Boolean {
      return this.ladoA == this.ladoB && this.ladoA == this.ladoC;
    }
  
    ehIsosceles(): Boolean {
      if (this.ladoA == this.ladoB && this.ladoA != this.ladoC) return true;
      if (this.ladoA == this.ladoC && this.ladoA != this.ladoB) return true;
      if (this.ladoB == this.ladoC && this.ladoB != this.ladoA) return true;
      return false;
    }
  
    ehEscaleno(): Boolean {
      return (this.ladoA != this.ladoB && this.ladoA != this.ladoC && this.ladoB != this.ladoC);
    }
  
    ehPossivelExistir(): Boolean {
      if (this.ladoA + this.ladoB > this.ladoC && this.ladoA + this.ladoC > this.ladoB 
        && this.ladoB + this.ladoC > this.ladoA) return true;
      return false;
    }
  
    ladosPossitivos(): Boolean {
      if (this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0) return true;
      return false;
    }
  
    classificaTriangulo(): String {
      if (!this.ehPossivelExistir() || !this.ladosPossitivos()) return "Triangulo não existe";
      if (this.ehEquilatero()) return "Equilátero";
      if (this.ehEscaleno()) return "Escaleno";
      return "Isósceles";
    }

    calculaParimetro(): number {
        if (this.ehPossivelExistir() || this.ladosPossitivos()) return this.ladoA + this.ladoB + this.ladoC;
        return 0;
    } 
  }
  