import { Dirección } from "./agendaDirección";
import { Mail } from "./agendaMail";
import { Teléfono } from "./agendaTeléfono";

class Persona {
    Nombre: string;
    Apellidos: string;
    Edad: number;
    DNI: number;
    Cumpleaños: number;
    Colorfavorito: string;
    Sexo: string;
    Direcciones:  Dirección []=[];
    Mails: Mail []=[];
    Teléfonos: Teléfono []=[];
    Notas: string | number;
  
    constructor(Nombre:string, Apellidos: string, Edad:number, DNI:number, Cumpleaños: number, Colorfavorito: string, Sexo: string, Notas: string | number) {
      this.Nombre = Nombre;
      this.Apellidos = Apellidos;
      this.Edad = Edad;
      this.DNI = DNI;
      this.Cumpleaños = Cumpleaños;
      this.Colorfavorito = Colorfavorito;
      this.Sexo = Sexo;
      this.Notas = Notas;
    }

      public adicionarTeléfono(tel:Teléfono){
        this.Teléfonos.push(tel)
    
      }
    
      public adicionarDirección(dir:Dirección){
        this.Direcciones.push(dir)
    
      }
    
      public adicionarMail(em:Mail){
        this.Mails.push(em)
    
      }
}

class Agenda {
    personas: Persona []=[];
  
    constructor(personas:Persona []) {
      this.personas = personas;
  
    }
  
    public registrarPersona(per:Persona){
      this.personas.push(per)
    }
  
    public encontrarPersona(DNI:number) :Persona{
      for(var i=0;i<this.personas.length;i++){
        if(this.personas[i].DNI==DNI){
          return this.personas[i];
        }
  
      }
      return null as any;
    }

    imprimir() {
        console.log(JSON.stringify(this.personas));
      }
}

let persona1= new Persona("Ricardo","Gomez",23, 13235468, 0o1012020, "verde", "M", "2perros");
let persona2= new Persona("Lida","Badau", 37, 4243854, 0o1052021 , "rojo", "F", "1mascota");
let persona3= new Persona("Dayna","Go",38, 2234092, 0o5032001,"amarillo", "F", "3peces" );

let agenda=new Agenda([persona1,persona2,persona3]);

let person=agenda.encontrarPersona(13235468);
person.adicionarTeléfono(new Teléfono("Fijo", 55555555))
person.adicionarDirección(new Dirección("Calle Merced", 2, 2, "B", 25555, "Barcelona", "Barcelona"))
person.adicionarMail(new Mail("GMAIL","dpwe@gmail.com"))
agenda.imprimir();
