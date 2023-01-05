const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

/* GET home page. */
router.get('/', async (req, res, next) => {
    const blogs = await Blog.find({})
    res.render('blogs/blog', { title: 'blog', blogs })
})

module.exports = router
