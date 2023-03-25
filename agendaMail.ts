export class Mail{
    Tipo: string;
    Dirección:number | string;
    constructor (a: string, b:  number | string) {
        this.Tipo= a;
        this.Dirección= b;
    }
}