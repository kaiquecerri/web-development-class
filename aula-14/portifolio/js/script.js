let contador = 0;
function adicionarContador() {
  contador++;
  document.getElementById("contador").textContent = contador;
}

const formulario = document.getElementById("seuFormulario");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");
const feedback = document.getElementById("feedback");

function mostrarFeedback(mensagem, estado) {
  feedback.textContent = mensagem;
  feedback.className = estado;
}

campoNome.addEventListener("input", function () {
  if (this.value.trim().length < 3) {
    mostrarFeedback("Digite pelo menos 3 caracteres no nome.", "erro");
    return;
  }

  mostrarFeedback("Nome válido!", "sucesso");
});

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  feedback.textContent = "";
  feedback.className = "";

  if (campoNome.value.trim().length < 3) {
    mostrarFeedback("Nome deve ter pelo menos 3 caracteres.", "erro");
    campoNome.focus();
    return;
  }

  if (!campoEmail.validity.valid) {
    mostrarFeedback("Digite um endereço de e-mail válido.", "erro");
    campoEmail.focus();
    return;
  }

  if (campoMensagem.value.trim().length < 10) {
    mostrarFeedback("Mensagem deve ter pelo menos 10 caracteres.", "erro");
    campoMensagem.focus();
    return;
  }

  mostrarFeedback("Mensagem validada com sucesso!", "sucesso");
  this.reset();
});
