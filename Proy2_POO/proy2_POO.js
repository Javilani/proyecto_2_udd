
class Usuario {
    constructor(respuestaCorr, respUsuario) {
        this.respuestaCorr = respuestaCorr,
        this.respUsuario = respUsuario
    }

    static mostrarResultados(respuestasUsuario, encuesta, cantPreguntas) {
        alert("Comparemos los resultados");
        var contador = 0;
        for (let i = 0; i < cantPreguntas; i++) {
            alert(`Para la pregunta ${i+1}: ${encuesta[i][0]} \n1. ${encuesta[i][1]} \n2. ${encuesta[i][2]} \nRespondiste: ${respuestasUsuario[i].respUsuario} y...`);
            if (respuestasUsuario[i].respUsuario === respuestasUsuario[i].respuestaCorr) {
                alert(`Respondiste bien! \nLa respuesta correcta si es: ${respuestasUsuario[i].respuestaCorr}`);
                contador = contador + 1;
            } else {
                alert(`La tuviste mala :c \nLa respuesta correcta era: ${respuestasUsuario[i].respuestaCorr}`);
            };
        };
        alert(`Obtuviste ${contador}/${cantPreguntas} buenas!`);
    }
}

alert("Bienvenido al creador de encuesta 3000!");

var contador = true;
const encuesta = [];
const respuestasUsuario = [];
var cantPreguntas = 0;

while (contador === true) {
    var respuesta = Number(prompt("Escoge una opción (Escribe el número que corresponda): \n1. Crear una encuesta \n2. Contestar la encuesta \n3. Mostrar los resultados \n4. Salir"));

    if (respuesta === 1) {
        alert('Seleccionó "Crear una encuesta".');
        var nombreEncuesta = prompt("¿Cuál es el nombre de la encuesta? ");
        cantPreguntas = Number(prompt("Esta debe tener por lo menos 8 preguntas, \n¿De cuántas preguntas será su encuesta?: "));
        while (isNaN(cantPreguntas)) {
            cantPreguntas = Number(prompt("La encuesta debe ser de al menos 8 preguntas, \n¿De cuántas preguntas será su encuesta?: "));
        };
        while (cantPreguntas < 8) {
            cantPreguntas = Number(prompt("La encuesta debe ser de al menos 8 preguntas, \n¿De cuántas preguntas será su encuesta?: "));
        };
        alert("Es hora de empezar, cada pregunta debe tener dos opciones de respuestas.");
        for (let i = 1; i <= cantPreguntas; i++) {
            var pregunta = prompt(`Pregunta ${i}: `);
            while (pregunta.length < 1) {
                pregunta = prompt(`Escriba la pregunta ${i}: `);
            }
            var opc1 = prompt("Escriba la opción 1 de respuesta: ");
            while (opc1.length < 1) {
                opc1 = prompt("Escriba la opción 1 de respuesta: ");
            }
            var opc2 = prompt("Escriba la opción 2: ");
            while (opc2.length < 1) {
                opc2 = prompt("Escriba la opción 2: ");
            }
            var respCorrecta = Number(prompt("Indique con un 1 o un 2 cual es la opción correcta a la pregunta. "));
            while (respCorrecta !== 1 && respCorrecta !== 2) {
                respCorrecta = Number(prompt("Valor ingresado para la respuesta correcta es incorrecto. \nIndique con un 1 o un 2 cual es la opción correcta: "));
            }
            encuesta.push([pregunta, opc1, opc2, respCorrecta]);
            };
        alert("Tu encuesta ha sido hecha!");    
        }
        
    else if (respuesta === 2) {
        alert('Seleccionó "Contestar la encuesta".');
        if (encuesta.length < 2) {
            alert("Lo siento, no hay encuesta disponible.");
        } else {
            alert("Para contestar, debe escribir como respuesta el número de la opción que desea escoger.");
            for (let i = 0; i < cantPreguntas; i++) {
                var respUsuario = Number(prompt(`Pregunta ${i+1}: ${encuesta[i][0]} \n1. ${encuesta[i][1]} \n2. ${encuesta[i][2]}`));
                if (respUsuario !== 1 && respUsuario !== 2) {
                    alert("Su respuesta debe ser 1 o 2. Inténtelo nuevamente: ");
                    respUsuario = Number(prompt(`Pregunta ${i+1}: ${encuesta[i][0]} \n1. ${encuesta[i][1]} \n2. ${encuesta[i][2]}`));
                } else {
                    var respuestaCorr = encuesta[i][3]
                    respuestasUsuario.push(new Usuario(respuestaCorr, respUsuario));
                };
            };
            alert("Has terminado de contestar la encuesta!");
        };
    }

    else if (respuesta === 3) {
        alert('Seleccionó "Mostrar los resultados"');
        if (respuestasUsuario.length < 1) {
            alert("Aún no se ha respondido la encuesta.");
        } else if (respuestasUsuario.length < 1) {
            alert("Todavía falta que se conteste la encuesta");
        } else {
        Usuario.mostrarResultados(respuestasUsuario, encuesta, cantPreguntas);
        }
    }

    else if (respuesta === 4) {
        alert("Seleccionó salir. Hasta luego!");
        contador = false;
    };
}