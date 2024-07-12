var encuesta = [];
var usuarioResp = [];

function crearPregunta(preg, opc1, opc2, opc3, opcCorrecta) {
    return {
        pregunta: preg,
        opcion1: opc1,
        opcion2: opc2,
        opcion3: opc3,
        opcCorrecta: opcCorrecta, 
    };
     }

function contestarEncuesta() {
    alert(`Esta encuesta cuenta con ${cantPreg} preguntas.`)
    for (i = 0; i < cantPreg; i++) {
        var respUsuario = Number(prompt(`Pregunta ${i+1}: ${encuesta[i].pregunta} \n1. ${encuesta[i].opcion1} \n2. ${encuesta[i].opcion2} \n3. ${encuesta[i].opcion3}`));
        if (respUsuario !== 1 && respUsuario !== 2 && respUsuario !== 3) {
            alert("Su respuesta debe ser 1, 2 o 3. Inténtelo nuevamente: ");
            respUsuario = Number(prompt(`Pregunta ${i+1}: ${encuesta[i].pregunta} \n1. ${encuesta[i].opc1} \n2. ${encuesta[i].opc2}`))
        } else {
            usuarioResp.push(respUsuario);
        }
    }
    return alert("Has terminado de contestar la encuesta!")
}

function mostrarResultados() {
    alert("Comparemos los resultados!");
    var respBuenas = 0;
    for (i = 0; i < cantPreg; i++) {
        alert(`Para la pregunta ${i+1}: ${encuesta[i].pregunta} \n1. ${encuesta[i].opcion1} \n2. ${encuesta[i].opcion2} \n3. ${encuesta[i].opcion3} \nUsted respondió: ${usuarioResp[i]}`);
        if (usuarioResp[i] === encuesta[i].opcCorrecta) {
            respBuenas = respBuenas + 1;
            alert("La respondiste bien!");
        } else {
            alert(`No la tuviste buena, la opción correcta era la ${encuesta[i].opcCorrecta}`);
        }
    }
    return alert(`Muy bien!, obtuviste ${respBuenas}/${cantPreg}`);
}


alert("Bienvenido al sistema de encuestas 2000");
var contador = true;

while (contador === true) {
    var respuesta = Number(prompt("Escoge una opción (Escribe el número que corresponda): \n1. Crear una encuesta \n2. Contestar la encuesta \n3. Mostrar los resultados \n4. Salir"));
    
    if (respuesta === 1) {
        alert('Seleccionó "Crear una encuesta".');
        var cantPreg = Number(prompt("La encuesta debe tener un mínimo de 8 preguntas. \n¿De cuántas desea hacer su encuesta?"));
        while (isNaN(cantPreg)) {
            cantPreg = Number(prompt("La encuesta debe ser de al menos 8 preguntas, \n¿De cuántas preguntas será su encuesta?: "));
        };
        while (cantPreg < 8) {
            cantPreg = Number(prompt("Recuerde que debe tener un mínimo de 8 preguntas. \n¿Cuántas preguntas desea que tenga su encuesta?"));
        };
        alert("Empecemos con las preguntas, estas deben tener 3 opciones de respuestas")
        for (i = 1; i <= cantPreg; i++) {
            var preg = prompt(`Pregunta ${i}: `);
            while (preg.length < 1) {
                preg = prompt(`Escriba la pregunta ${i}: `);
            }
            var opc1 = prompt("Opción 1 de respuesta: ");
            while (opc1.length < 1) {
                opc1 = prompt("Escriba la opción 1 de respuesta: ");
            }
            var opc2 = prompt("Opción 2 de respuesta: ");
            while (opc2.length < 1) {
                opc2 = prompt("Escriba la opción 2: ");
            }
            var opc3 = prompt("Opción 3 de respuesta: ");
            while (opc3.length < 1) {
                opc3 = prompt("Escriba la opción 3: ");
            }
            var opcCorrecta = Number(prompt("Por favor indique el número de la opción correcta: "));
            while (opcCorrecta !== 1 && opcCorrecta !== 2 && opcCorrecta !== 3) {
                opcCorrecta = Number(prompt("Valor ingresado para la respuesta correcta es incorrecto. \nIndique con un 1 o un 2 cual es la opción correcta: "));
            }
            encuesta.push(crearPregunta(preg, opc1, opc2, opc3, opcCorrecta));
        }
        alert("Su encuesta ha sido creada!"); 
    }

    else if (respuesta === 2) {
        alert('Seleccionó "Contestar la encuesta".');
        if (encuesta.length < 1) {
            alert("Primero hay que crear una encuesta.");
        } else {
            contestarEncuesta();
        }
        }

    else if (respuesta === 3) {
        alert('Seleccionó "Mostrar los resultados"')
        if (encuesta.length < 1) {
            alert("Primero hay que crear una encuesta.");
        } else if (usuarioResp.length < 1) {
            alert("Todavía falta que se conteste la encuesta");
        } else {
            mostrarResultados();
        }
        }

    else if (respuesta === 4) {
        alert("Seleccionó salir. Hasta luego!");
        contador = false;
    }
}
