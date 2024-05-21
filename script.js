function imprimir(mensaje, id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function wellcome() {
    let name = document.getElementById('nameStudent').value;
    let mensaje = 'Hi ' + name + ', wellcome to the test!';

    imprimir(mensaje, 'wellcomeStudent');
}

function seeAnswer(){
    let ques1 = document.getElementById('question1correct').value;
    let mensaje = 'La respuesta correcta es ' + ques1;

    imprimir(mensaje, 'question1');
}
