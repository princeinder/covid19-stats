import { getSummary } from "./components/summary.js";
import { getChartData } from "./components/chart.js";
import { getCountries } from "./components/countries.js";
window.addEventListener("load", function (e) {
  console.log("dsdf");
  e.preventDefault();
  getCountries();
  getSummary();
  getChartData();
});

document
  .getElementById("selectcountry")
  .addEventListener("change", function (e) {
    console.log("dsdf4");
    e.preventDefault();
    getSummary(this.value);
    getChartData(this.value);
  });
