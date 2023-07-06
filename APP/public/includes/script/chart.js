function createChart(canvasId, daten) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: daten.map(d => d._id),
      datasets: [{
        label: 'VerkaufteMenge',
        data: daten.map(d => d.totalMenge),
        backgroundColor: daten.map((d, i) => `hsla(${i * 360 / daten.length}, 70%, 50%, 0.2)`), // Varieert den Hue-Wert für jeden Balken
        borderColor: daten.map((d, i) => `hsla(${i * 360 / daten.length}, 70%, 50%, 1)`), // Varieert den Hue-Wert für jeden Balken
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
