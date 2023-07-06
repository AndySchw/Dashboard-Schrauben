function createChart(canvasId, daten) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: daten.map(d => d._id),
      datasets: [{
        label: 'VerkaufteMenge',
        data: daten.map(d => d.totalMenge),
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
          type: 'category',
          ticks: {
            autoSkip: false
          }
        }
      }
    }
  });
}
