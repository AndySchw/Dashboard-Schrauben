function createBubbleChart(canvasId, daten) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: daten.map((d, i) => ({
          label: d._id,
          data: [{
            x: new Date(d.Datum).getTime(),
            y: i, 
            r: d.VerkaufteMenge / 1000
          }],
          backgroundColor: randomColor(),
          hoverBackgroundColor: randomColor(),
        }))
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value, index, values) => daten[index]._id
            }
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
  
  function randomColor() {
    return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',0.5)';
  }
  