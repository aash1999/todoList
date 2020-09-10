const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.set("view engine", "ejs")
app.use(express.static("public"))

var today = new Date();
var options ={
  weekday : "long",
  day : "numeric",
  month : "long",
}
var day  = today.toLocaleDateString("en-US",options)
var items =[]

app.listen(3000)

app.get("/", function(req, res) {

  res.render("index", {day : day , items : items})
})

app.post("/",function(req,res){
  if(req.body.newIteam != ""){
  items.push(req.body.newIteam)

  }
  res.redirect("/")

})
