function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function welcome() {
    let formulario = document.getElementById('welcome');
    let mensaje = '';

    if (formulario.checkValidity()) {
        let name = document.getElementById('nameStudent').value;
        mensaje = 'Hi ' + name + ', welcome to the test!';
    }
    else {
        mensaje = 'The name cannot be empty';
    }
    imprimir(mensaje, 'welcomeStudent');
}

function seeAnswer(correctAnswer, seeAnswerId) {
    let mensaje = 'The correct answer is ' + correctAnswer;
    imprimir(mensaje, seeAnswerId);
}

function correctAnswer(selectorId, correctAnswerString, questionCorrectId) {
    let respuestaSeleccionada = document.getElementById(selectorId).value; // A o  B o C
    let mensaje = '';

    if (respuestaSeleccionada === correctAnswerString) {
        mensaje = 'Correct! Your score +2';
    } else if (respuestaSeleccionada === 'empty') {
        mensaje = 'Your score 0';
    }
    else {
        mensaje = 'Wrong! -1';
    }
    imprimir(mensaje, questionCorrectId);
}


function seeScore() {
    const correctAnswerArray = ['C', 'A', 'A', 'B', 'B', 'C', 'B', 'C', 'A', 'C'];
    let puntuacion = 0;

    for (let i = 0; i < correctAnswerArray.length; i++) {
        let respuestaId = "question" + (i + 1);
        let respuesta = document.getElementById(respuestaId).value;

        if (respuesta === correctAnswerArray[i]) {
            puntuacion = puntuacion + 2;
        } else if (respuesta !== 'empty') {
            puntuacion = puntuacion - 1;
        }
    }
    imprimir('Total score: ' + puntuacion, 'seeScore')
}