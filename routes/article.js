const express = require("express")
const log = require("../lib/Log")

const postController = require("../controller/article/article-post")
const getController = require('../controller/article/article-get')
const deleteController = require('../controller/article/article-delete')
const updateController = require("../controller/article/article-update")

const router = express.Router()

router.use((req, res, next) => {
    log.route("article route")
    next()
})

router.get("/:id",getController.getById)

router.get("", getController.getAll)

router.post("", postController.create)

router.put("/:id", updateController.update)

router.delete("/:id", deleteController.delete)

module.exports = router