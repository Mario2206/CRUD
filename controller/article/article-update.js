const articleModel = require("../../models/Article")

exports.update = (req, res) => {

    const id = req.params.id
    const data = req.body

    articleModel.findByIdAndUpdate(id, data, {new : true}, (error, article) => {
        res.sendToClient(article, error)
    })
}