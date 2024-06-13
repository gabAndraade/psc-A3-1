document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pixForm');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário
        showModal();
    });

    function showModal() {
        modal.style.display = 'block';
    }

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});