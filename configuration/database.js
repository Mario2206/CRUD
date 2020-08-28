const mongoose = require("mongoose")
const log = require("../lib/Log")
const config = require("./config")

exports.connectToDb = ()=> {

    const url = `mongodb+srv://${config.username}:${config.dbPassword}@cluster0.aqxcu.mongodb.net/${config.dbName}?retryWrites=true&w=majority`

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology : true, useFindAndModify : false })

    const db = mongoose.connection

    db.on("error", (error)=>{
        log.error(error)
    })

    db.on("open", ()=> {
        log.connection("Database is open")
    })

}