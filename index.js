const express = require("express")
const config = require("./configuration/config")
const log = require("./lib/Log")
const morgan = require("morgan")
const db = require("./configuration/database")
const bodyparser = require("body-parser")
const errorHandler = require("./middleware/errorHandler")


const articleRoute = require("./routes/article")

const app = express()

db.connectToDb()

app.use(morgan("combined"))

app.use(bodyparser.json())

app.use(errorHandler.process)

app.use('/article', articleRoute)

app.listen(config.port, ()=> {
    log.connection("Server is open on port " + config.port)
})