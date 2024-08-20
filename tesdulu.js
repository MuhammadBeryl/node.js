const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const exp = require("constants")
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.get("/test", (req,res) => {
    let response = {
        massage: "ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("server run on port 8000");
})