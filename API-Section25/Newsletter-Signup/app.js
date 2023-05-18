const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req, res)=>{
    const name = req.body.fname
    const surname = req.body.lname
    const email = req.body.email
    console.log(name, surname, email)
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: name,
                    LNAME: surname
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data)
    const url = "https://mandrillapp.com/api/1.0/users/ping"
    htpps.request(url, options, function(response) {

    })
})

app.listen(3000, function(){
    console.log("The server is running on port 3000...")
})

//7d1a9e5c276cf3a4c9813f457f5b3de0-us14
//ab58f8a918