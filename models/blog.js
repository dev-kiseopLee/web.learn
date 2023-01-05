const mongoose = require('mongoose')
const { Schema } = mongoose

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title can not be blank '],
    },
    description: {
        type: String,
        required: [true, 'description can not be blank '],
    },
    tags: {
        type: String,
        required: [true, 'tag can not be blank'],
    },
})

module.exports = mongoose.model('Blog', blogSchema)
