import { Covid19 } from "../actions/covid19.js";
import { renderLoading } from "./loader.js";

export function getCountries() {
  var covid19 = new Covid19();
  renderLoading(true);
  covid19.getCountries().then((countries) => {
    render(countries);
  });
}

function render(data) {
  var countries = document.getElementById("selectcountry");
  countries.classList.add("form-control");
  var html = '<option value="">Global</option >';
  data.countries.map(function (country, i) {
    html +=
      '<option value="' + country.name + '">' + country.name + "</option>";
  });
  countries.innerHTML = html;
  renderLoading(false);
}
