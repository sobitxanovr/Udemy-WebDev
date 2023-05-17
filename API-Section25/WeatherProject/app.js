const express = require("express")
const https = require("https")
const app = express()

app.get("/", (req, res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Namangan&units=metric&appid=eda3c58681fa5f98f333e6a4ca55fc85"
    https.get(url, (response) => {
        console.log(response.statusCode)
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temperature in Namangan is " + temp + " with " + desc + "</h1>")
            res.write("<img src=" + imageURL + ">")
            res.send()
        })
    })
})
app.listen(3000, ()=>{
    console.log("The server is running on port 3000...")
})