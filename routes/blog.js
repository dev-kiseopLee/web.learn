const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

/* GET home page. */
router.get('/', async (req, res, next) => {
    const blogs = await Blog.find({})
    res.render('blogs/blog', { title: 'blog', blogs })
})

router.get('/show/:id', async (req, res, next) => {
    const blog = await Blog.findById(req.params.id)
    console.log(blog)
    res.render('blogs/show', { title: 'show', blog })
})

router.get('/new', async (req, res, next) => {
    res.render('blogs/new', { title: 'new' })
})

/* POST */

router.post('/', async (req, res, next) => {
    const blog = new Blog(req.body.blog)
    await blog.save()
    res.redirect(`/blog/show/${blog._id}`)
})

module.exports = router
