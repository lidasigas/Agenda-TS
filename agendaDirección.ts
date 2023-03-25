export class Dirección{
    Calle: string;
    Número: number;
    Piso: number;
    Letra: string;
    Códigopostal: number;
    Población: string;
    Provincia: string;
    constructor(Calle: string, Número: number, Piso: number, Letra: string, Códigopostal: number, Población: string, Provincia: string) {
        this.Calle=Calle;
        this.Número=Número;
        this.Piso=Piso;
        this.Letra=Letra;
        this.Códigopostal=Códigopostal;
        this.Población=Población;
        this.Provincia=Provincia;
    }
}
