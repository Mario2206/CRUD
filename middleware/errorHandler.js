const log = require("../lib/Log")

exports.process = (req, res, next) => {
    
    res.goodCode = 200
    res.errorCode = 500

    res.code = (code, errorCode) => {
        res.goodCode = code
        res.errorCode = errorCode

        return res
    }

    res.sendToClient = (message, error) => {

        if(error) {
            log.error(error)
            res.status(res.errorCode).json({error})
        } else {
            res.status(res.goodCode).json(message)
        }

    }

    next()
}