const ArticleModel = require("../../models/Article")

exports.create = (req, res)=> {
    const body = req.body
    
    const newArticle = new ArticleModel(req.body)
    newArticle.save()
    .then(()=> {
        res.status(201).json({message : "Article created"})
    })
    .catch(error=>res.status(500).json({error}))
}