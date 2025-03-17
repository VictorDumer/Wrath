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

document.addEventListener('DOMContentLoaded', function() {
    const Price = document.getElementById('Start-now');
    Price.addEventListener('click', function() {

            window.location.href = "pagamento.html";
       
    });
});
const imgContainer = document.getElementById("carrosel-img");
const imgs = document.querySelectorAll(".content-img");

let idx = 0;

function carrosel() {
    idx++;
    if (idx == 4) {
        idx = 0;
    }
    imgContainer.style.transform = `translateX(${-idx * 70}%)`;
    
}
carrosel();
setInterval(carrosel, 1600);
