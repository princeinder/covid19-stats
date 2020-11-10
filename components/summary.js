import { Covid19 } from "../actions/covid19.js";
import { getMonthsData } from "../utils/utils.js";

export function getSummary(filterby) {
  var covid19 = new Covid19();
  covid19.getCases(filterby).then((cases) => {
    if (cases) render(cases);
  });
}

function render(data) {
  var html = '<div class="row">';
  for (const i in data) {
    if (data[i]["value"] || data[i]["value"] == 0)
      html +=
        '<div class="col-md-4"><div class="grid"><span class="title">' +
        i +
        '</span><span class="value">' +
        data[i]["value"] +
        '</span><span class="date">' +
        new Date(data["lastUpdate"]).toDateString() +
        "</span></div></div>";
  }
  getMonthsData(new Date(data["lastUpdate"]));
  html += "</div>";
  summary.innerHTML = html;
}
