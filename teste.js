class Tijolo {
    constructor (altura, base) {
        this.altura = altura,
        this.base = base
    }

    Area() {
        return this.altura * this.base;
    }

    Soma() {
        return this.altura + this.base;
    }

    
};

let tijolo1 = new Tijolo(2, 2);

let tijolo2 = new Tijolo(3, 2.5);


console.log(tijolo1.Area(), tijolo1.Soma());

console.log(tijolo2.Area(), tijolo2.Soma());


