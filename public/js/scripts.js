
const ctxManobras = document.getElementById('manobrasChart').getContext('2d');
const manobrasChart = new Chart(ctxManobras, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Março', 'Abril', 'Maio', 'Junho'], // Exemplo de dias do mês
        datasets: [{
            label: 'Manobras que Você Acertadas',
            data: [0, 1, 1, 2, 1, 2, 2], // Dados de exemplo
            borderColor: 'rgba(249, 178, 8, 0.7)',
            backgroundColor: 'rgba(249, 178, 8, 0.7)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1 // Definindo que o eixo Y deve aumentar de 1 em 1
                }
            }
        }
    }
});

/* / Gráfico de Usuários Cadastrados
const ctxUsuarios = document.getElementById('usuariosChart').getContext('2d');
const usuariosChart = new Chart(ctxUsuarios, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Março', 'Abril', 'Maio', 'Junho'], // Meses de exemplo
        datasets: [{
            label: 'Skatistas no Gandin Skate School',
            data: [3, 7, 4, 8, 3, 12], // Dados de exemplo
            backgroundColor: 'rgba(249, 178, 8, 0.9)',
            borderColor: 'rgba(249, 178, 8, 0.9)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 */