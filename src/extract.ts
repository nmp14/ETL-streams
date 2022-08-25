// const rp = require("request-promise");
const data = require ("../fake_data/planets");

// Api is currently not giving data anymore. Just use json data.
// const EXO_API_URL = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=ML";

const getAllPlanets = () => {
    return new Promise((resolve, reject) => {
        resolve(data);
    });
};

export { getAllPlanets };