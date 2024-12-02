
async function PostarManobra() {
    try {
      var idUsuario = JSON.parse(sessionStorage.ID_USUARIO)
      const resposta = await fetch(`/video/PostarManobra/${idUsuario}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resposta.ok) {
        const json = await resposta.json();
        console.log(json)
        var qtdAcertos = [
            0,0,0,0,0,0,0,0,0
        ]

        if(json[0].ollie != 0){

            qtdAcertos.splice(0, 1, json[0].ollie)
        }
        if(json[0].varial != 0){

            qtdAcertos.splice(1, 1, json[0].varial)
        }
        if(json[0].olliefront != 0){

            qtdAcertos.splice(2, 1, json[0].olliefront)
        }
        if(json[0].flip != 0){

            qtdAcertos.splice(3, 1, json[0].flip)
        }
        if(json[0].fakieollie != 0){

            qtdAcertos.splice(4, 1, json[0].fakieollie)
        }
        if(json[0].fakiefront != 0){

            qtdAcertos.splice(5, 1, json[0].fakiefront)
        }
        if(json[0].varial360 != 0){

            qtdAcertos.splice(6, 1, json[0].varial360)
        }
        if(json[0].ollieback != 0){

            qtdAcertos.splice(7, 1, json[0].ollieback)
        }
        if(json[0].flip360 != 0){

            qtdAcertos.splice(8, 1, json[0].flip360)
        }

        const ctxManobras = document.getElementById('manobrasChart').getContext('2d');
        const manobrasChart = new Chart(ctxManobras, {
    type: 'bar',
    data: {
        labels: ['Ollie', 'Varial', 'Ollie Front', 'Flip', 'Fakie Ollie', 'Fakie Front', '360 Varial', 'Ollie Back', '360 flip'],
        datasets: [{
            label: 'Manobras que Você Acertou',
            data: qtdAcertos,
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

        }
      }
     catch (erro) {
      console.log(`#ERRO: ${erro}`);
    }

    return false;

  }

window.onload = PostarManobra()


 