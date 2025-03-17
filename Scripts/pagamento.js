document.addEventListener('DOMContentLoaded', function() {
    const Butao = document.getElementById('Buy');
    Butao.addEventListener('click', function() {

        const selectedPaymentMethod = document.querySelector('input[name="cartao"]:checked');
        if (selectedPaymentMethod) {
            alert("Pagamento efetuado com sucesso!");
        } else {
            alert("Por favor, selecione um método de pagamento.");
        }
    });
});