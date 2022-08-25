const rp = require("request-promise");

const EXO_API_URL = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=ML";

const getAllPlanets = () =>
  rp({
    uri: EXO_API_URL,
    method: "GET",
    qs: {
      table: "exoplanets",
      format: "json"
    },
    json: true
  });

export { getAllPlanets };