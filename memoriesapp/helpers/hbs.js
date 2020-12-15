const hbs = require("hbs");
const moment = require("moment");

// CUSTOM HELPERS

hbs.registerHelper("formatDate", function(date) {
  return moment(date).format("YYYY-MM-DD");
});
