const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/BMICalculator.html")
})

app.post("/", (req, res)=>{
    var w = Number(req.body.weight)
    var h = Number(req.body.height)

    var result = w / (h * h)
    res.send("Your BMI is " + result)
})

app.listen(3000, () => {
    console.log("The server is working on port 3000...")
})