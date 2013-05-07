
function Tentaculo() {}

function Pulpo() {

    this.extremidades = [];

    for(var i = 1; i <= 8; i++) {

        this.extremidades.push(new Tentaculo()); // Creación de objetos dentro de otra clase

    }
}


var pulpopaul = new Pulpo();

console.log(pulpopaul.extremidades);