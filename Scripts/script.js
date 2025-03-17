
const script = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const emailInput = document.getElementById('enter-email');
        const submitButton = document.getElementById('enter-button');

        emailInput.addEventListener('input', function() {
            if ((emailInput.value.trim() !== '' && emailInput.value.includes('@') && emailInput.value.includes('.com') || emailInput.value.includes('.COM'))) {
                submitButton.classList.add('active');
                submitButton.disabled = false;
            } else {
                submitButton.classList.remove('active');
                submitButton.disabled = true;
            }
        });
    });
};

script();

function Login() {
    alert("Faça login para continuar");
}
