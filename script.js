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

const correctAnswerArray = ['C', 'A'] // contiene las 10 respuestas correctas

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
    let puntuacion = document.getElementById('question1');

    let mensaje = '';
    if (puntuacion === 'question1correct') {
        mensaje = 'Your score: +2';
    } else if (puntuacion === 'question1empty') {
        mensaje = 'Your score: 0';
    } else {
        mensaje = 'Your score: -1';
    }
    imprimir(mensaje, 'seeScore');
}