window.onload = function () {
    const ctx = document.getElementById('myChart').getContext('2d');

    const data = {
        labels: [
            'Hugo Silva',
            'Carlos Moura',
            'Eliza Souza',
            'Fernanda Oliveira',
            'Anderson Santos'
        ],
        datasets: [{
            data: [20, 5, 20, 15, 40],
            backgroundColor: [
                'rgba(44,151,222,255)',
                'rgba(21,186,155,255)',
                'rgba(157,85,184,255)',
                'rgba(189,195,199,255)',
                'rgba(234,75,53,255)'
            ],
            hoverOffset: 4
        }]
    };

    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data,
        options: {
            scale: {
                pointLabels :{
                   fontStyle: "bold",
                }
            },
            plugins: {
                legend: {
                    position: "right"
                }
            },
            rotation: (0.5 * Math.PI)
        }
    });


}