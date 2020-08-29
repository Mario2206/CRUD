const articleModel = require("../../models/Article")

exports.delete = (req, res) => {
    const id = req.params.id

    articleModel.findByIdAndDelete(id, (error, article) => {
        if(!article) {
            res.code(404,500)
        }
        res.sendToClient(article, error)
    })
}