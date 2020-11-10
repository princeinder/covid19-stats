import { apiurl } from "../environment/environment.js";
export class Covid19 {
  getCases(country = "") {
    try {
      var chargeurl = apiurl;
      if (country) chargeurl = apiurl + "/countries/" + country;
      const response = new Promise((resolve, reject) => {
        this.loader = true;
        fetch(`${chargeurl}`)
          .then((res) => res.json())
          .then((data) => {
            this.loader = false;
            resolve(data);
          })
          .catch((err) => {
            this.loader = false;
            reject(err);
          });
      });
      return response;
    } catch (err) {
      return err;
    }
  }
  getCountries() {
    try {
      var chargeurl = apiurl + "/countries";
      const response = new Promise((resolve, reject) => {
        fetch(`${chargeurl}`)
          .then((res) => res.json())
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
      return response;
    } catch (err) {
      return err;
    }
  }
}
