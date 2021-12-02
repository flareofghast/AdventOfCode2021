// Load in a file from a URL

const axios = require('axios');
const { COOKIE } = require('./secrets');

module.exports = function (url, cb) {
  let loaded;

  axios(url, { headers: { Cookie: COOKIE } }, { withCredentials: true })
    .then((res) => {
      loaded = res.data;
      cb(loaded);
    }).catch((err) => {
      console.log(err);
    });
};
