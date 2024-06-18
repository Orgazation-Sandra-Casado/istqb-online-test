
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
    const correctAnswerArray = ['C', 'A', 'A', 'B', 'B', 'C', 'B', 'C', 'A', 'C'] // contiene las 10 respuestas correctas
    let puntuacion = 0;
    let mensaje = '';

    for (let i = 1; i <= correctAnswerArray.length; i++) {
        let respuesta = document.getElementById('question' + i).value;
        if (respuesta === correctAnswerArray[i]) {
            puntuacion = puntuacion + 2;
            mensaje = 'Your score : ' + puntuacion;
        } else if (respuesta !== 'empty') {
            puntuacion = puntuacion - 1;
            mensaje = 'Your score : ' + puntuacion;
        }
    }
    imprimir(mensaje, 'seeScore');
}