const addDays = require("date -fns/addDays");
//importing express

const express = require("express");
//creating instance
let app = express();

//handling http response

app.send("/", (request, response) => {
  // getting todays_date
  let todays_date = new Date();
  console.log(todays_date);
  //adding 100-days to the todays_date,creating instance third_party_package
  let date_af_100_day = addDays(todays_date, 100);
  console.log(date_af_100_day);
  //handling the response ,returning in dd-mm-yy format
  response.send(`${date_af_100_day.getDate()}-${date_af_100_day.getMonth() + 1}-${date_af_100_day.getFullYear()}`;)
});

//exporting _module
module.exports = app;
