function createPieChart(canvasId, daten) {
  const ctx = document.getElementById(canvasId).getContext('2d');

  const labels = daten.map(d => `${d._id} - ${new Date(d.Datum).toLocaleDateString()}`);
  const dataPoints = daten.map(d => d.VerkaufteMenge);

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: dataPoints,
        backgroundColor: labels.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`)
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Meistverkaufte Ware pro Firma'
      }
    }
  });
}
