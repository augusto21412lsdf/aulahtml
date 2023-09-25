

function validaFormulario() {
    //    alert('teste');


    var nome, email, duvida;

    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    duvida = document.getElementById('duvida').value;

    if (nome === "") {
        alert('Campo nome está vazio!');
        document.getElementById('nome').focus();
    } else if (email === "") {
        alert('Campo email está vazio!');
        document.getElementById('email').focus();
    } else if (duvida === "") {
        alert('Campo duvida está vazio!');
        document.getElementById('duvida').focus();
    } else {
        document.frmContato.submit();
    }
}    