const articleModel = require("../../models/Article")

exports.getById = (req, res)=> {
    const id = req.params.id

    articleModel.findById(id, (error, article) => {
        if(!article) {
            res.code(404, 500)
        }
        res.sendToClient(article,error)
    })
}

exports.getAll = (req, res) => {

    articleModel.find((error, articles) => {
        if(articles.length === 0) {
            res.code(404, 500)
        }
        res.sendToClient(articles,error)
    })
    
}