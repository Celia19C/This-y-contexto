
//PARA PRACTICAR:

// var persona = {
//     firstName: "Penelope",
//     lastName: "Barrymore",
//     fullName: function () {
//         console.log(this.firstName + " " + this.lastName);
//         console.log(persona.firstName + " " + persona.lastName);
//     }
// }

// var Persona = function() {
//     firstName = "Sandra";
//     lastName = "Bullock";
//     fullName = function () {
//       console.log(this.firstName + " " + this.lastName);
//       console.log(Persona.firstName + " " + Persona.lastName);
//     }
// }

// var Persono = function() {
//     var firstName = "Penelopo";
//     var lastName = "Borrymoro";
//     this.fullName = function () {
//       console.log(this.firstName + " " + this.lastName);
//       console.log(Persono.firstName + " " + Persono.lastName);
//     }
// }

//(todas las demás de arriba estarían mal hechas)

var Persone = function() {
    this.firstName = "Penelepe";
    this.lastName = "Berrymere";
}

Persone.prototype.fullName = function () {
    console.log(this.firstName + " " + this.lastName);
    console.log(Persone.firstName + " " + Persone.lastName);
}

////EN ES6
class Persone {
    constructor () {
    this.firstName = "Penelepe";
    this.lastName = "Berrymere";
    }
    fullname (){
        console.log(this.firstName + " " + this.lastName);
        console.log(Persone.firstName + " " + Persone.lastName);
    }
}

const p4 = new Persone 
p4.fullName()

///////////////////////////////////////////////////////////////////////////
// ¿Qué obtenemos?
// var p1 = new persona(); => persona is not a constructor
//var p2 = new Persona();// => todo bien. Devuelevla instancia de la Persona (si haces un console.log de p2 se ve, es simplemente la plantilla.
 // var p3 = new Persono();//todo bien. Devuelev la instancia de la Persono, es simplemente la plantilla. Probar (p3.fullName())
 //var p4 = new Persone();


// ¿Qué obtenemos?
// console.log(persona.lastName); => Barrymore
//console.log(Persona.lastName) => undefined porque es una función
// console.log(Persono.lastName); undefined porque es una función
// Persone.lastName; => undefined porque es una función


// ¿Qué obtenemos?
// p2.fullName(); =>  porque es una función
// p3.fullName(); => undefined undefined undefined undefined
// p4.fullName(); => Penelope Berrymery undefined undefined

// ¿Qué obtenemos?
// Persono.fullName = function(){ console.log('otra cosa'); }
// p3.fullName(); undefined undefined undefined undefined

//¿Qué obtenemos?
// var p4 = new Persone()
// p4.fullName() => Penelope BErrymere undefined undefined
//  Persone.prototype.fullName = function() { console.log('otra cosa'); }
// p4.fullName() otra cosa
