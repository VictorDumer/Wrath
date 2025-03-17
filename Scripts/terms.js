document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.botao.botao-sim'); // Seleciona o botão com ambas as classes

    if (button) {
        button.addEventListener('click', function() {
            window.location.href = "pagamento.html";
        });
    }
});