// charts.js
function createChart(canvasId, daten) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: daten.map(d => new Date(d.Datum).toLocaleDateString()),
        datasets: [{
          label: 'VerkaufteMenge',
          data: daten.map(d => d.VerkaufteMenge),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            type: 'time',
            time: {
              unit: 'day'
            }
          }
        }
      }
    });
  }
  