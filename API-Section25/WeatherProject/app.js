const express = require("express")
const https = require("https")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res)=>{
    const query = req.body.cityName
    const apiKey = "eda3c58681fa5f98f333e6a4ca55fc85"
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&appid=" + apiKey
    https.get(url, (response) => {
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temperature in " + query + " is " + temp + " with " + desc + "</h1>")
            res.write("<img src=" + imageURL + ">")
            res.send()
        })
    })
})



app.listen(3000, ()=>{
    console.log("The server is running on port 3000...")
})