"use strict";
exports.__esModule = true;
var agendaDirecci_n_1 = require("./agendaDirecci\u00F3n");
var agendaMail_1 = require("./agendaMail");
var agendaTel_fono_1 = require("./agendaTel\u00E9fono");
var Persona = /** @class */ (function () {
    function Persona(Nombre, Apellidos, Edad, DNI, Cumpleaños, Colorfavorito, Sexo, Notas) {
        this.Direcciones = [];
        this.Mails = [];
        this.Teléfonos = [];
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Edad = Edad;
        this.DNI = DNI;
        this.Cumpleaños = Cumpleaños;
        this.Colorfavorito = Colorfavorito;
        this.Sexo = Sexo;
        this.Notas = Notas;
    }
    Persona.prototype.adicionarTeléfono = function (tel) {
        this.Teléfonos.push(tel);
    };
    Persona.prototype.adicionarDirección = function (dir) {
        this.Direcciones.push(dir);
    };
    Persona.prototype.adicionarMail = function (em) {
        this.Mails.push(em);
    };
    return Persona;
}());
var Agenda = /** @class */ (function () {
    function Agenda(personas) {
        this.personas = [];
        this.personas = personas;
    }
    Agenda.prototype.registrarPersona = function (per) {
        this.personas.push(per);
    };
    Agenda.prototype.encontrarPersona = function (DNI) {
        for (var i = 0; i < this.personas.length; i++) {
            if (this.personas[i].DNI == DNI) {
                return this.personas[i];
            }
        }
        return null;
    };
    Agenda.prototype.imprimir = function () {
        console.log(JSON.stringify(this.personas));
    };
    return Agenda;
}());
var persona1 = new Persona("Ricardo", "Gomez", 23, 13235468, 267280, "verde", "M", "2perros");
var persona2 = new Persona("Lida", "Badau", 37, 4243854, 283665, "rojo", "F", "1mascota");
var persona3 = new Persona("Dayna", "Go", 38, 2234092, 1324033, "amarillo", "F", "3peces");
var agenda = new Agenda([persona1, persona2, persona3]);
var person = agenda.encontrarPersona(13235468);
person.adicionarTeléfono(new agendaTel_fono_1.Teléfono("Fijo", 55555555));
person.adicionarDirección(new agendaDirecci_n_1.Dirección("Calle Merced", 2, 2, "B", 25555, "Barcelona", "Barcelona"));
person.adicionarMail(new agendaMail_1.Mail("GMAIL", "dpwe@gmail.com"));
agenda.imprimir();
