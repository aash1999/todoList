const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.set("view engine", "ejs")

var today = new Date();

app.listen(3000)

app.get("/", function(req, res) {
  var day = ''
  switch (today.getDay()) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;

  }
  res.render("index", {day : day})
})
