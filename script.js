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

function seeAnswer() {
    let mensaje = 'The correct answer is C';

    imprimir(mensaje, 'seeAnswer');
}

function correctAnswer() {
    let corregirRespuesta = document.getElementById('question1').value;
    let mensaje = '';
    if (corregirRespuesta === 'question1correct') {
        mensaje = 'Correct';
    } else if (corregirRespuesta === 'question1empty') {
        mensaje = 'Cannot be empty';
    }
    else {
        mensaje = 'Wrong!';
    }
    imprimir(mensaje, 'question1correct');
}

function seeScore() {
    let puntuacion = document.getElementById('question1');
    let total;
    let mensaje = '';
    if (puntuacion === 'question1correct') {
        mensaje = total + 2;
    } else if (puntuacion === 'question1empty') {
        mensaje = total;
    } else {
        mensaje = total - 1;
    }
    imprimir(mensaje);
}