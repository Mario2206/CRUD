const articleModel = require("../../models/Article")

exports.delete = (req, res) => {
    const id = req.params.id

    articleModel.findByIdAndDelete(id, (error, article) => {
        res.sendToClient(article, error)
    })
}