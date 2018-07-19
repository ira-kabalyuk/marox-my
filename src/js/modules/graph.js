(function() {
  function initGraph(el) {
    if (el === null) return;

    var ctx = el;

    var labels = [];

    for (var i = 0; i < 47; i++) {
      labels.push('');
    }

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '',
          data: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800, 820, 840, 860, 880, 900, 920, 940, 960, 980, 1000  ],
          backgroundColor: [
            'rgba(40, 46, 65, 0.1)',
          ],
          borderColor: [
            'rgba(55,63,84,1)',
          ],
          borderWidth: 2,
          zeroLineColor: 'rgba(0, 0, 0, 0.13)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        'elements': {
          'line': {
            'tension': 0.4
          },
          'point': {
            'radius': 0
          }
        },
        'tooltips': {
          'enabled': false
        },
        'title': {
          'display': true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              borderDash: [3, 3],
            }
          }],
          xAxes: [{
            gridLines: {
              borderDash: [3, 3],
            }
          }]
        }
      }
    });
  }

  initGraph(document.getElementById('graph'));
}());
