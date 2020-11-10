import { Covid19 } from "../actions/covid19.js";
var myChart;
export function getChartData(filterby) {
  var covid19 = new Covid19();
  covid19.getCases(filterby).then((cases) => {
    if (cases) render(cases, filterby);
  });
}
function getChartLabels(cases) {
  var labels = [];
  for (const i in cases)
    if (cases[i]["value"]) labels.push(i.charAt(0).toUpperCase() + i.slice(1));
  return labels;
}

function getChartDataLabels(cases) {
  var labels = [];
  for (const i in cases)
    if (cases[i]["value"]) labels.push(i.charAt(0).toUpperCase() + i.slice(1));
  return labels;
}

function getChartValues(cases) {
  var values = [];
  for (const i in cases) if (cases[i]["value"]) values.push(cases[i]["value"]);
  return values;
}

function render(cases, filterby) {
  console.log(cases);
  var labels = getChartLabels(cases);
  var values = getChartValues(cases);
  var datalabels = getChartDataLabels(cases);
  var ctx = document.getElementById("summaryChart").getContext("2d");
  if (myChart) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            "rgba(0,0,255,.5)",
            "rgba(0,255,0,.5)",
            "rgba(255,0,0,.5)",
          ],
          borderColor: [
            "rgba(0,0,255,.5)",
            "rgba(0,255,0,.5)",
            "rgba(255,0,0,.5)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      tooltips: {
        mode: "point",
      },
      intersect: false,
      legend: { display: false },
      title: {
        display: true,
        text: `Current state in ${filterby ? filterby : "Global"}`,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  console.log(myChart);
}
