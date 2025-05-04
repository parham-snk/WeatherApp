const express = require("express")
const path = require("path")


const app = express()



module.exports = new class server {
    constructor() {
        this.configServer()
        this.setConfigs()
        this.configRouter()
    }
    configServer() {
        app.listen(8080, (err) => err ? console.log(err) : console.log("Server is online : http://localhost:8080"))
    }
    setConfigs() {
        app.use("/public",express.static(path.join(__dirname,"public")))
        app.set("views", path.join(__dirname, 'resources'))
        app.set("view engine","ejs")
        
    }
    configRouter() {
        app.use(require("./router/router"))
    }
}