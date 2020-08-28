const articleModel = require("../../models/Article")

exports.getById = (req, res)=> {
    const id = req.params.id

    articleModel.findById(id, (error, article) => {
        res.sendToClient(article,error)
        
    })
}

exports.getAll = (req, res) => {

    articleModel.find((error, articles) => {
        res.sendToClient(articles,error)
    })
}