function Profesor() {

    this.name = "Ricardo Monagas";

}

function Curso (profesor) {

    this.profesor = profesor;

    this.saludar = function() {

        console.log("Hola alumnos, soy el profesor " + this.profesor.name);

    }

}

var yo = new Profesor();

var TeAmoJavascript = new Curso(yo);

TeAmoJavascript.saludar();