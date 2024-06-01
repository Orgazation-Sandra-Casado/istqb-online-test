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
        mensaje ='The name cannot be empty';
    }
    imprimir(mensaje, 'wellcomeStudent');
}

function seeAnswer(){
    let mensaje = 'The correct answer is C';

    imprimir(mensaje, 'seeAnswer');
}
