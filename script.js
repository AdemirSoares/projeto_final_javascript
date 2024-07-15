function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    // Converter para números
    var numA = parseInt(campoA);
    var numB = parseInt(campoB);

    // Verificar se B é maior que A
    if (numB > numA) {
        exibirMensagem(true);
        return true; // Formulário é válido
    } else {
        exibirMensagem(false);
        return false; // Formulário é inválido
    }
}

function exibirMensagem(valido) {
    var mensagemElemento = document.getElementById('mensagemResultado');

    if (valido) {
        mensagemElemento.textContent = 'Formulário válido! B é maior que A.';
        mensagemElemento.className = 'mensagem mensagem-valido';
    } else {
        mensagemElemento.textContent = 'Formulário inválido! B precisa ser maior que A.';
        mensagemElemento.className = 'mensagem mensagem-invalido';
    }

    mensagemElemento.style.display = 'block';
}