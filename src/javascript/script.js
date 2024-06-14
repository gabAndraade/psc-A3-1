fetch('https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=BRL&apikey=0OKF9138NXQ92QXV')
    .then(response => response.json())
    .then(data => {
        const dates = Object.keys(data['Time Series FX (Daily)']); // Obtenha as datas
        const values = Object.values(data['Time Series FX (Daily)']).map(item => parseFloat(item['4. close'])); // Obtenha os preços de fechamento e converta-os para números
        
        // Crie o gráfico usando os dados obtidos
        const ctx = document.getElementById('meuGrafico').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates.reverse(), // Inverter as datas para exibir na ordem cronológica correta
                datasets: [{
                    label: 'USD/BRL',
                    data: values.reverse(), // Inverter os preços para corresponder às datas
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Erro ao obter dados:', error);
    });

// Seleciona o botão PIX pela classe CSS
const pixButton = document.querySelector('.btn-default.pix');

// Adiciona um evento de clique ao botão PIX
pixButton.addEventListener('click', function() {
    // Redireciona para a página de pagamento de PIX
    window.location.href = "pix-payment.html";
});

// Restante do seu código JavaScript existente para os botões EXTRATO e INVESTIR
// ...

// Seleciona o botão EXTRATO pela classe CSS
const extratoButton = document.querySelector('.btn-default.extrato');

// Adiciona um evento de clique ao botão EXTRATO
extratoButton.addEventListener('click', function() {
    // Navega para a seção de extrato usando scrollIntoView para rolar suavemente até a seção
    document.querySelector('#transactions').scrollIntoView({ behavior: 'smooth' });
});

// Seleciona o botão INVESTIR pela classe CSS
const investirButton = document.querySelector('.btn-default.investir');

// Adiciona um evento de clique ao botão INVESTIR
investirButton.addEventListener('click', function() {
    // Navega para a seção de investimentos usando scrollIntoView para rolar suavemente até a seção
    document.querySelector('#investments').scrollIntoView({ behavior: 'smooth' });
});



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


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-profile');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Atualiza o nome do perfil
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        document.getElementById('profile-first-name').textContent = firstName;
        document.getElementById('profile-last-name').textContent = lastName;

        // Atualiza a imagem do perfil (se for o caso)
        const fileInput = document.getElementById('profile-image-file');
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profile-image').src = e.target.result;
            };
            reader.readAsDataURL(fileInput.files[0]);
        }

        // Limpa o formulário (opcional)
        form.reset();
    });
});

