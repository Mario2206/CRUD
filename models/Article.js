const mongoose = require("mongoose")

const stringType = {
    type : String,
    required : true
}

const articleSchema = mongoose.Schema({
    title : stringType, 
    description : stringType,
    content : stringType,
    author : stringType,
    comments : [{content : stringType, author : stringType, date : stringType}]
}, {
    timestamps : {createdAt : "creation_date"}
})

module.exports = mongoose.model("Article", articleSchema)