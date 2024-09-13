const express = require("express")



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

    }
    configRouter() {
        app.use(require("./router/router"))
    }
}